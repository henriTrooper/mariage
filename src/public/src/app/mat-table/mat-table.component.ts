import { Component, OnInit, ViewChild } from '@angular/core';
import { RoutingService } from '../routing.service';

import { MessageService } from 'primeng/api';

import { ConfirmationService } from 'primeng/api';

import { NgxSpinnerService } from 'ngx-spinner';

import { User } from '../models/user'

import { formatDate } from '@angular/common';
import { Table } from 'primeng/table/table';


@Component({
  selector: 'app-mat-table',
  templateUrl: './mat-table.component.html',
  styleUrls: ['./mat-table.component.css'],
  styles: [`
        :host ::ng-deep .p-dialog .product-image {
            width: 150px;
            margin: 0 auto 2rem auto;
            display: block;
        }
    `],
  providers: [MessageService]

})
export class MatTableComponent implements OnInit {
  productDialog: boolean;

  products: User[];

  product: User;

  selectedProducts: User[];

  submitted: boolean;

  productDocument: [];


    // Option Search

    @ViewChild('dt') table: Table;

    optionsProspect = [
      { 'label': 'mandataire', 'value': 'mandataire' },
      { 'label': 'agence', 'value': 'agence' },
      { 'label': 'particulier', 'value': 'particulier' },
    ];
  
    optionsMandat = [
      { 'label': 'immobilier', 'value': 'immobilier' },
      { 'label': 'conciergerie', 'value': 'conciergerie' },
    ];
    optionsNom = []
    optionsPrenom = []
    optionsMail = []


  tableHeader = [
    { 'field': 'nom', 'header': 'Nom' },
    { 'field': 'prenom', 'header': 'Prenom' },
    { 'field': 'email', 'header': 'Email' },
    { 'field': 'prospect', 'header': 'Prospect' },
    { 'field': 'mandat', 'header': 'Mandat' },
    { 'field': 'date', 'header': 'RDV' },
    { 'field': 'bien', 'header': 'Biens' },
  ];

  constructor(
    private spinner: NgxSpinnerService,
    public routingService: RoutingService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) { }

  ngOnInit(): void {
    this.getData();
  }

  spinnerFunct(time: any): void {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, time);
  }



  getData(): void {
    this.spinnerFunct(100000000)
    this.routingService.getData()
      .subscribe(data => {
        this.spinnerFunct(0)
        this.messageService.add({ severity: 'success', summary: 'Sucess', detail: 'Récupération de tous les Clients' });
        this.products = data
        console.log('ddd', data)
        this.option(data)
      },
        (errorResponse) => {
          this.spinnerFunct(0)
          const status = `Status ${errorResponse.status} ${errorResponse.statusText} on ${errorResponse.url}`;
          this.messageService.add({ severity: 'error', summary: 'Error', detail: status });
        });
  }

  option(data) {
    for (let i = 0; i < data.length; i++) {
      const row = data[i];
      //Nom
      let nom = {
        'label': '',
        'value': ''
      };
      nom.label = row.nom;
      nom.value = row.nom;
      this.optionsNom.push(nom);

      //Prenom
      let prenom = {
        'label': '',
        'value': ''
      };
      prenom.label = row.prenom;
      prenom.value = row.prenom;
      this.optionsPrenom.push(prenom);

      //Mail
      let mail = {
        'label': '',
        'value': ''
      };
      mail.label = row.email;
      mail.value = row.email;
      this.optionsMail.push(mail);

    }
  }

  //Upload documents
  onUpload(event) {
    for (let file of event.files) {
      const filesEvent = {
        titre: file.name,
        date: file.lastModifiedDate
      }
      this.product.document.push(filesEvent)
    }
    console.log('add', this.product.document)

    this.messageService.add({ severity: 'info', summary: 'File Uploaded', detail: '' });
  }

  //Export
  exportColumns: any[];
 /*  exportPdf() {
    import("jspdf").then(jsPDF => {
        import("jspdf-autotable").then(x => {
            let doc = new jsPDF()
            doc.autoTable(this.exportColumns, this.products);
            doc.save('products.pdf');
        })
    })
} */

exportExcel() {
    import("xlsx").then(xlsx => {
        const worksheet = xlsx.utils.json_to_sheet(this.products);
        const workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
        const excelBuffer: any = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
        this.saveAsExcelFile(excelBuffer, "products");
    });
}

saveAsExcelFile(buffer: any, fileName: string): void {
    import("file-saver").then(FileSaver => {
        let EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
        let EXCEL_EXTENSION = '.xlsx';
        const data: Blob = new Blob([buffer], {
            type: EXCEL_TYPE
        });
        FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
    });
}


  openNew() {
    this.product = {};
    this.submitted = false;
    this.productDialog = true;
  }

  deleteSelectedProducts() {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete the selected products?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.products = this.products.filter(val => !this.selectedProducts.includes(val));
        this.selectedProducts = null;
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Products Deleted', life: 3000 });
      }
    });
  }

  editProduct(product: User) {
    console.log('edit', product)
    if(product.rdv){
      for (let i = 0; i < product.rdv.length; i++) {
        product.rdv[i].startedDate = new Date(product.rdv[i].startedDate);
        product.rdv[i].endDate = new Date(product.rdv[i].endDate);
      }
    }
    this.product = { ...product };
    this.productDialog = true;
  }

  deleteProduct(product: User) {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete ' + product.nom + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.products = this.products.filter(val => val._id !== product._id);
        this.product = {};
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Product Deleted', life: 3000 });
      }
    });
  }

  hideDialog() {
    this.productDialog = false;
    this.submitted = false;
  }

  formatDate(date) {
    let month = date.getMonth() + 1;
    let day = date.getDate();

    if (month < 10) {
        month = '0' + month;
    }

    if (day < 10) {
        day = '0' + day;
    }

    return date.getFullYear() + '-' + month + '-' + day;
}

  // Ajout D'un rdv
  addRdv(){
    const newRdv = {
      titre:'',
      description:'',
      startedDate: new Date(),
      endDate: new Date()
    }
    this.product.rdv.push(newRdv);
  }
  removeRdv() {
    this.product.rdv.splice(-1, 1);
  }


 // Ajout D'un BIEN
 addBien(){
  const newBien = {
    nom: '',
    model: '',
    description:'',
    lien: '',
  tarif:{
    payer:0,
    nonPayer:0,
    date: new Date()
},
 date: new Date()
}
  this.product.bien.push(newBien);
}

removeBien() {
  this.product.bien.splice(-1, 1);
}

  saveProduct() {
    this.submitted = true;
    this.spinnerFunct(100000000)
    this.routingService.updateData(this.product)
      .subscribe(data => {
        this.spinnerFunct(0)
        this.messageService.add({ severity: 'success', summary: 'Sucess', detail: 'Sauvegarde effectués' });
        for (let i = 0; i < this.products.length; i++) {
          let element = this.products[i];
          if(element._id === data.user._id){
            this.products[i] = data.user
          }
        }
        this.productDialog = false;
        this.product = {};
      },
        (errorResponse) => {
          this.spinnerFunct(0)
          this.messageService.add({ severity: 'error', summary: 'Error', detail: errorResponse });
        });
  }

}
