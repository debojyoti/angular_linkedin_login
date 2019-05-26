import { Component } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Component({
  selector: "LoginComponent",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent {
  private linkedInCredentials = {
    clientId: "client_id_of_linkedin_app",
    redirectUrl: "https://y8pud.codesandbox.io/linkedInLogin"
  };
  constructor(private http: HttpClient) {}
  login() {
    window.location.href = `https://www.linkedin.com/uas/oauth2/authorization?response_type=code&client_id=${
      this.linkedInCredentials.clientId
    }&redirect_uri=${this.linkedInCredentials.redirectUrl}&state=987654321`;
  }
}
