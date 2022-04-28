# Angular

New project : ng new my-app

Prérequis : installation Angular et NodeJs

Installer les modules : npm i 

Lancer le projet : ng serve ou nodemon

Url du projet en local : http://localhost:4200/

lancer le linter :  ng lint

lancer les tests : ng test

Interface de debug : http://localhost:9876/

Lancer sonar : npm run sonar

https:
    créer un fichier certificate.cnf
    copier/coller les confs:
      [req]
      default_bits = 2048
      prompt = no
      default_md = sha256
      x509_extensions = v3_req
      distinguished_name = dn
      [dn]
      C = GB
      ST = London
      L = London
      O = My Organisation
      OU = My Organisational Unit
      emailAddress = email@domain.com
      CN = localhost
      [v3_req]
      subjectAltName = @alt_names
      [alt_names]
      DNS.1 = localhost

      Lancer la commande $ openssl req -new -x509 -newkey rsa:2048 -sha256 -nodes -keyout localhost.key -days 3560 -out localhost.crt -config certificate.cnf

      modificer le package.json : "start": "ng serve --ssl --ssl-key ./src/cert/localhost.key  --ssl-cert ./src/cert/localhost.cert",


## Création d'une interface de connexion sécurisé JWT : STEP 13 - 20: https://appdividend.com/2020/07/09/angular-authentication-system-login-and-registration-in-angular/

But: 
Sécurisation des routes: Mise en place de guard sur les routes qui permettent de vérifier si une personne est connecté.
Création de 2 routes de connexions /register et /login avec un mini traitement sur les données envoyées.
Création d'un service spécifique à l'authentification avec une connexion au backend
Décodage du token envoyé par le back et stockahe dans le local storage
Affichage de l'utilisateur connecté
Ajout de bootstrap

##  server smtp gmail
https://pepipost.com/tutorials/how-to-send-emails-with-javascript/
https://stackoverflow.com/questions/20906077/gmail-error-the-smtp-server-requires-a-secure-connection-or-the-client-was-not#:~:text=solution%20for%20case%201%3A%20Enter,to%20login%20from%20all%20apps.&text=Use%20that%20newly%20generated%20password%20to%20authenticate%20via%20SMTP.
https://accounts.google.com/DisplayUnlockCaptcha




4 components :
$ ng g c header  --skipTests=true
$ ng g c home    --skipTests=true
$ ng g c profile --skipTests=true
$ ng g c auth    --skipTests=true

    We will put the navigation bar on the HeaderComponent.

    The root URL component would be the HomeComponent.

    The profile component will be our private component, which we can access if the user is authenticated.

    The AuthComponent contains the following child components.

RegisterComponent
LoginComponent
We will go module wise from here. So register and login both functionalities we can count under auth. So, we will create the following three files for auth.

Auth Module file
Auth Service file
Auth Guard file


Warning: Update Tuto 

Step 15 :
Attention aux déclarations dans  auth.module.ts :
@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent,
    AuthComponent
  ],

  Erreur sur le <router-outlet>

Step 17 : Modifier uriseg.....

Testing consommation API: pensez à mettre async/await sur les appels à la base
Mettre le 'secret' à la place de env.secret dans UserController.js


## Installation de Bootstrap complet

$ npm install bootstrap --save

After that, we have to include in our angular application. So open the angular.json file and add the following line under build >> options >> styles object.

"styles": [
       "src/styles.css",
        "./node_modules/bootstrap/dist/css/bootstrap.min.css"
],

Now, our angular application has access to bootstrap classes.


## Installation de angular material

$ ng add @angular/material

$ créer un module material : ng g m material
  Importer les composants utiliser pour le projet : import { MatSidenavModule } from '@angular/material/sidenav'

  Importer ce fichier dans app.module.ts : import { MaterialModule } from './material.module';

  Le rajouter dans l'import :
   imports: [
    ....
    MaterialModule,
    ....
  ],



### Connection réseaux sociaux (https://dzone.com/articles/login-with-facebook-and-google-using-angular-8) + Insta (https://www.developerdrive.com/how-to-use-the-instagram-api/) :  npm i angularx-social-login
     auth.module:
     import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
      import {
        GoogleLoginProvider,
        FacebookLoginProvider,
        AmazonLoginProvider,
        VKLoginProvider
      } from 'angularx-social-login';

      {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: true,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '491545286631-8neji8ffjru8tg5e7jrklmirfb04jrtm.apps.googleusercontent.com'
            ),
          },
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider('280142546546998'),
          },
          {
            id: AmazonLoginProvider.PROVIDER_ID,
            provider: new AmazonLoginProvider(
              'amzn1.application-oa2-client.f074ae67c0a146b6902cc0c4a3297935'
            ),
          },
          {
            id: VKLoginProvider.PROVIDER_ID,
            provider: new VKLoginProvider(
              '7624815'
            ),
          },
        ],
      } as SocialAuthServiceConfig,
    }


  Dans le composant :
  import { SocialAuthService } from 'angularx-social-login';
  import { SocialUser } from 'angularx-social-login';
  import {
    GoogleLoginProvider,
    FacebookLoginProvider,
    AmazonLoginProvider,
    VKLoginProvider,
  } from 'angularx-social-login';

   constructor(
    private socialAuthService: SocialAuthService
  ) { }

  Récupération de la connection dans le ngOninit (peut etre mis dans n'importe quel composant)
   this.socialAuthService.authState.subscribe(user => {
      //console.log('eee', user)
      this.user = user;
    });


    signInWithGoogle(): void {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID).then(
      (userData) => {
        console.log('google', userData)
         //localStorage.setItem('auth_GOOGLE',  JSON.stringify(userData));
         this.socialConnect.email = userData.email
         this.auth.login(this.socialConnect)
      .subscribe((token) => {
        this.router.navigate(['/']);
      },
        (errorResponse) => {
          this.errorsLogin.push(errorResponse);
        });
})
  }


  signInWithFB(): void {
    this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID).then(
      (userData) => {
        console.log('fb', userData)
        //localStorage.setItem('auth_FB', JSON.stringify(userData));
        this.socialConnect.email = userData.email
        this.auth.login(this.socialConnect)
     .subscribe((token) => {
       this.router.navigate(['/']);
     },
       (errorResponse) => {
         this.errorsLogin.push(errorResponse);
       });
  })
}
  

  signInWithAmazon(): void {
    this.socialAuthService.signIn(AmazonLoginProvider.PROVIDER_ID).then(
      (userData) => {
        console.log('AWS', userData)
        //localStorage.setItem('auth_AWS', JSON.stringify(userData));
        this.socialConnect.email = userData.email
        this.auth.login(this.socialConnect)
     .subscribe((token) => {
       this.router.navigate(['/']);
     },
       (errorResponse) => {
         this.errorsLogin.push(errorResponse);
       });
  })
}

Déconnection : A mettre dans le service de logout + injection de dépendance et import
this.socialAuthService.signOut();



  ## NavBar : 
  - https://github.com/azouaoui-med/angular-pro-sidebar
  - https://bootsnipp.com/snippets/Q0dAX


  ## Error rencontrer:
  1. A la création d'un composant :
   More than one module matches. Use the skip-import option to skip importing the component into the closest module or use the module option to specify a module.
  Solution :  Il existe plusieurs module dans l'application donc il faut designer le module auquel on veut ajouter le component :  ng g c header/isAuth --skipTests=true --module app

## A regarder :
ngx-bootstap : https://valor-software.com/ngx-bootstrap/#/
Input/Output : https://angular.io/guide/inputs-outputs
Subscribe: https://angular.io/guide/observables