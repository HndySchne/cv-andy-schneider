import {Stack} from "@/interfaces";
import { NextResponse } from "next/server";
import { faServer, faComputer, faDatabase, faGear, faBook, faWrench } from "@fortawesome/free-solid-svg-icons";


const stacks: Stack = [
    {
        title : 'Frontend',
        logo : faComputer,
        stackArray : ['JS', 'JSX', 'TSX', 'HTML5', 'CSS3', 'SASS'],
    }, 
    {
        title : 'Backend',
        logo: faServer, 
        stackArray : ['C#', 'COBOL', 'Javascript']
    },
    {
        title : 'Database',
        logo: faDatabase, 
        stackArray:['mongoDB', 'mySQL', 'DB2 SQL']
    },
    {
        title : 'Framework',
        logo: faGear, 
        stackArray:['NodeJS', 'Devbooster', 'Devbooster - SPID', 'Next-js']
    },
    {
        title : 'Libraries',
        logo: faBook, 
        stackArray:['React', 'React-Native']
    },
    {
        title : 'Tools',
        logo: faWrench, 
        stackArray: ['JCL', 'TSO', 'Strobe (compuware)', 'Bmc (mainview)', 'SAS', 'GIT']
    },
]; 

export async function GET() {
    return NextResponse.json(stacks);
  }