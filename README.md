# Hello World Application
## To run this application on your local machine please follow the below steps,
### Step 1:
#### First you need to clone this repository to your local machine, go to command line and go to the directory of your choice where this repository file would be downloaded. Then type the following command 
> git clone https://github.com/ArvindKarthi/react-hello-world
### Step 2:
#### Open the file in code editor of your choice or copy the path of the folder and open in command line.
### Step 3:
#### Now we need to download the dependencies to run the application. So run the following command,
> npm install
### Step 4:
#### Once all the dependencies have been installed then we can run the application by giving following command.
> npm start
### Step 5:
#### The application would be successfully opened in your default browser window to display hello world.
## To use the Label and TextField component follow the below steps,
### Step 1: 
#### To use TextField component without label you can use the following syntax,
```
function App(){
  const attributes = {
    type:"type of field",
    name:"name of the field",
    size:"size of the field to dynamic styling", //allows to dynamically style the text field component.
    placeholder:"to mention what this field takes as input"
  }
  return (
    <form className="form">
      <div className="form-group">
        <TextField attributes={attributes}/>
      </div>
    </form>
  );
}
```
### Step 2:
#### To use TextField component with label use the following syntax,
```
function App(){
  const attributes = {
    type:"type of field",
    name:"name of the field",
    size:"size of the field to dynamic styling", //allows to dynamically style the text field component.
    placeholder:"to mention what this field takes as input"
  }
  return (
    <form className="form">
      <div className="form-group">
        <Label attributes={attributes}/>
        <TextField attributes={attributes}/>
      </div>
    </form>
  );
}
```
## Thus you can follow the above steps to create a react application and add form fields to it.
