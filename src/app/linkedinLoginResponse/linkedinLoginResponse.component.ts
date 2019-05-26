import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: "LinkedinLoginResponse",
  templateUrl: "./linkedinLoginResponse.component.html",
  styleUrls: ["./linkedinLoginResponse.component.css"]
})
export class LinkedinLoginResponse implements OnInit {
  linkedInToken = "";
  constructor(private route: ActivatedRoute) {}
  ngOnInit() {
    this.linkedInToken = this.route.snapshot.queryParams["code"];
  }
}
