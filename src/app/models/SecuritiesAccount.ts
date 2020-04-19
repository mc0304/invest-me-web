import { InitialBalances } from './InitialBalances';
import { CurrentBalances } from './CurrentBalances';
import { ProjectedBalances } from './ProjectedBalances';


export class SecuritiesAccount {

    type: String;
    accountId: Number;
    roundTrips: Number;
    isDayTrader: Boolean;
    isClosingOnlyRestricted: Boolean;
    initialBalances: InitialBalances;
    currentBalances: CurrentBalances;
    projectedBalances: ProjectedBalances;

}