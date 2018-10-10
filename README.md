# eXciting Laughing Box

A.k.a xlBox.  
A simple chatroom using React and Firebase.  
## [Live demo](https://vulong23.github.io/xlbox/)

## Built Withhjk

* **React**
    - **create-react-app**: for boilerplating Babel, Webpack, etc.
    - **Material-UI**: for most of the UI components
    - **CSS Modules**: for scoped CSS
    - **FontAwesome**: for awesome icons
* **Firebase**:
    - **Authentication**: for getting user's data
    - **Realtime Database**: for syncing messages between multiple clients
    - **Storage**: to support sharing files
* **GitHub Pages**: for deployment

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

* Node 6+
* A Firebase account

### Installing

Run these commands from the terminal
```bash
git clone https://github.com/vulong23/xlbox.git
cd xlbox
npm install
npm start
```

Oops, the project failed to compile because it couldn't find a file call `firebase.js`. It is the config file for Firebase and is being left out on purpose. Now let us create your own Firebase project.

Create a project from the Firebase console, link it with authentication provider including Facebook, Google, Github.  
Grab your project's Firebase config, it should be something like this:
```javascript
var config = {
    apiKey: "AIzaSyDSZ1OnxFYyQ***********************",
    authDomain: "my-project-id.firebaseapp.com",
    databaseURL: "https://my-project-id.firebaseio.com",
    projectId: "my-project-id",
    storageBucket: "my-project-id.appspot.com",
    messagingSenderId: "664395*****"
  }
```

Next, create `firebase.js` in `./src/config`
```javascript
import * as firebase from 'firebase'

export default firebase.initializeApp(config)
```

Now let's ```npm start``` again, our project ran smoothly as ever.

And that's all, hopefully you will have fun tinkering with my Spaghetti code :v

## Deployment

I used GitHub Pages for deploying, if you are going to be like me, just edit the ```homepage``` property in ```package.json``` and run ```npm run deploy```.  
[For more information and other hosts](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#github-pages)

## Contributors

* **Nguyen Le Vu Long** - *Initial work* - [vulong23](https://github.com/vulong23)
* **Nguyen Dac Sang** - [dacsang97](https://github.com/dacsang97)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

## Acknowledgments

The UI is greatly inspired from Facebook Messenger
