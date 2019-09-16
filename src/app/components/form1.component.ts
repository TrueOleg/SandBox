import { Component, Input, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
@Component({
  selector: "form1",
  templateUrl: "./form1.component.html"
})
export class Form1Component implements OnInit {
  @Input() form: number;
  dataForm: FormGroup;
  name: string;
  email: string;
  address: string;
  phone;

  constructor(private http: HttpClient, private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.dataForm = this.formBuilder.group({
      name: ["", Validators.required],
      email: ["", Validators.email, Validators.required],
      address: ["", Validators.required],
      phone: ["", Validators.required]
    });
  }

  submit() {
    this.http.post("https://postman-echo.com/post", {
      name: this.name,
      email: this.email,
      address: this.address,
      phone: this.phone
    });
  }
}
