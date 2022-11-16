import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  settings: any = {
    plugins: {
      Webcam: true,
      GoogleDrive: true,
      Instagram: true,
      Facebook: true,
      Dropbox: true,
      ScreenCapture: true
    },
    restrictions: {
      maxNumberOfFiles: 10
    },
    options: {
      debug: true
    },
    uploaderLook: {
      note: "",
      theme: "auto",
      proudlyDisplayPoweredByUppy: true
    },
    statusBarOptions: {
      showProgressDetails: true,
      hideRetryButton: false,
      hideCancelButton: false,
      hideProgressAfterFinish: false
    },
    awsConfig: {
      folderName: "Test",
      s3BucketCredentials: {
        accessKeyId: "YOUR_ACCESS_ID",
        secretAccessKey: "YOUR_SECRET_ACCESS_KEY",
        region: "YOUR_REGION_NAME",
        Bucket: "YOUR_BUCKET_NAME"
      }
    }
  };

  onFileAdd(evt){

  }

  onFileUpload(evt){
    
  }
  uploadResult(evt){
    console.log(evt)
  }
}
