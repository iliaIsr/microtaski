import React, {useState} from "react";
import './App.css';
import {ComponentLess4} from "./dzPo4video/ComponentLess4";
import {Button} from "./Button";


export type FilterMoneyType = "All" | "RUBLS" | 'Dollars';

function App() {

    let students = [
        {id: 1, name: "James", age: 8},
        {id: 2, name: "Robert", age: 18},
        {id: 3, name: "John", age: 28},
        {id: 4, name: "Michael", age: 38},
        {id: 5, name: "William", age: 48},
        {id: 6, name: "David", age: 58},
        {id: 7, name: "Richard", age: 68},
        {id: 8, name: "Joseph", age: 78},
        {id: 9, name: "Thomas", age: 88},
        {id: 10, name: "Charles", age: 98},
        {id: 11, name: "Christopher", age: 100},
        {id: 12, name: "James", age: 8},
        {id: 13, name: "Robert", age: 18},
        {id: 14, name: "John", age: 28}

    ];
    const Button1foo = (subscraber: string, age: number) => {
        alert(subscraber + " " + age)
    }
    const Button2foo = (subscraber: string, age: number) => {
        alert(subscraber + " " + age)
    }
    const Button3foo = (nameBut: string) => {
        alert(nameBut)
    }
    // lesson 3
    let [a, setA] = useState(1)
    const onCliskHundler1 = () => {
        setA(++a);
        alert(a)
    }
    const onCliskHundler2 = () => {
        setA(0);
        alert(a)
    }

    //lesson4
    const [money] = useState([
        {banknots: 'Dollars', value: 100, number: ' a1234567890'},
        {banknots: 'Dollars', value: 50, number: ' z1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' w1234567890'},
        {banknots: 'Dollars', value: 100, number: ' e1234567890'},
        {banknots: 'Dollars', value: 50, number: ' c1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' r1234567890'},
        {banknots: 'Dollars', value: 50, number: ' x1234567890'},
        {banknots: 'RUBLS', value: 50, number: ' v1234567890'},
    ])

    const [val, setFilter] = useState<FilterMoneyType>("All")
    console.log(val)
    let currentMoney = money;
    if (val === "RUBLS") {
        currentMoney = money.filter(maney => maney.banknots === "RUBLS")
    }
    if (val === "Dollars") {
        currentMoney = money.filter(maney => maney.banknots === "Dollars")
    }

    const filterVal = (newValue: FilterMoneyType)=> {
        setFilter(newValue)
    }

    return (
        <div>
            <ComponentLess4 filterVal={setFilter} currentMoney={currentMoney}/>

            <>
                <h1>{a}</h1>
                <button onClick={onCliskHundler1}>number</button>
                <button onClick={onCliskHundler2}>0</button>
                <Button name={"youtube chanel-1"} callBack={() => Button1foo("Vasya", 21)}/>
                <Button name={"youtube chanel-2"} callBack={() => Button2foo("Jenya", 22)}/>
                <Button name={"i'am stuped button"} callBack={() => Button3foo("I'am stupped button")}/>
            </>
        </div>

    );
}

export default App;
