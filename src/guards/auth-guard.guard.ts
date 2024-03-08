import { inject, EnvironmentInjector } from "@angular/core";
import { CanActivateFn, CanActivateChildFn, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { runInInjectionContext } from '@angular/core';

export function multipleGuards(guards: (CanActivateFn | CanActivateChildFn)[]) {
    return async (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
        const injector = inject(EnvironmentInjector);
        for (const guard of guards) {
            const guardResult = await runInInjectionContext(injector, () => guard(route, state));
            if (!guardResult) {
                return false;
            }
        }
        return true;
    }
}

export const guard1 = async () => {
    console.log('guard 1')
    const resultOfFoo = await new Promise(resolve => setTimeout(() => resolve(true), 5000));

    console.log("guard 1", resultOfFoo)
    return true;
}

export const guard2 = () => {
    console.log('guard 2')
    return true;
}

export const guard3 = async () => {
    const resultOfFoo = await new Promise(resolve => setTimeout(() => resolve(true), 5000));

    console.log("guard 3", resultOfFoo)
    return true;
}

export const guard4 =  () => {
    console.log("guard 4")
    return true;
}