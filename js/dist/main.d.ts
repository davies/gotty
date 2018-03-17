import { Terminal } from "./webtty";
declare global  {
    interface Window {
        term: Terminal;
    }
}
