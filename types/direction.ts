import { LogoSet} from "~/types/logoSet";

export interface Direction {
    ids: number[],
    name: string,
    logo: LogoSet,
    currency: string[],
    filter: string[]
}