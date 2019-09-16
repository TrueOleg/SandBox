import { Component, Input } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "form3",
  templateUrl: "./form3.component.html"
})
export class Form3Component {
  @Input() form: number;
  name;
  email;
  category;
  request;
  priority;

  constructor(private http: HttpClient) {}
  submit() {
    this.http.post("https://postman-echo.com/post", {
      name: this.name,
      email: this.email,
      category: this.category,
      request: this.request,
      priority: this.priority
    });
  }
}
