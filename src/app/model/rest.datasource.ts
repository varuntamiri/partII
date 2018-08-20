import { Injectable, Inject} from "@angular/core";
import { InjectionToken } from '@angular/core';
import { Http, Request, RequestMethod, Headers } from "@angular/http";
import { Observable } from "rxjs";
import { Product } from "./product.model";
import "rxjs/add/operator/map";
import "rxjs/add/operator/delay";

export const REST_URL = new InjectionToken("rest_url");

@Injectable()
export class RestDataSource {
constructor(private http: Http,
@Inject(REST_URL) private url: string) { }

getData(): Observable<Product[]> {
return this.sendRequest(RequestMethod.Get, this.url) as Observable<Product[]>;
}

saveProduct(product: Product): Observable<Product> {
return this.sendRequest(RequestMethod.Post, this.url, product);
}
updateProduct(product: Product): Observable<Product> {
return this.sendRequest(RequestMethod.Put,
`${this.url}/${product.id}`, product);
}

deleteProduct(id: number): Observable<Product> {
return this.sendRequest(RequestMethod.Delete, `${this.url}/${id}`);
}

private sendRequest(verb: RequestMethod,
url: string, body?: Product): Observable<Product> {
let headers = new Headers();
headers.set("Access-Key", "<secret>");
headers.set("Application-Names", ["exampleApp", "proAngular"]);
return this.http.request(new Request({
method: verb,
url: url,
body: body,
headers: headers
}))
.delay(5000)
.map(response => response.json());
}

}
