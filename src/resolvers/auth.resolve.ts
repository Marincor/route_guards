import { ActivatedRouteSnapshot } from "@angular/router";

export const authResolver = (route: ActivatedRouteSnapshot): {data: string} => {
    console.log("authresolver")
    return {data: "bla"};
  }