export class User {
    // tslint:disable-next-line:variable-name
    _id?: number;
    isActive?: boolean;
    isOnline?: boolean;
    mandat?: string;
    nom?: string;
    prenom?: string;
    prospect?: string;
    photo?: string;
    email?: string;
    password?: string;
    passwordConfirmation?: string;
    telephone?: string;
    adresse?: string;
    note?: string;
    document?: [{
        titre?: string;
        date?: Date
    }];
    rdv?: [{
        titre?: string;
        description?: string;
        startedDate?: Date;
        endDate?: Date;
    }];
    bien?: [{
        nom?: string;
        model?: string;
        description?: string;
        lien?: string;
        tarif?: {
            payer?: Number;
            nonPayer?: Number;
            date?: Date;
        },
        date?: Date;
    }];
feedback ?: [{
    rate: ''
}];
}
