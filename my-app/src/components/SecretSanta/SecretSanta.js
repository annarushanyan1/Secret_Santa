import { useEffect, useState } from "react";
import "./SecretSanta.css"

function SecretSanta() {
    const [numbers, setNumbers] = useState([1,2]);
    const [change, setChange] = useState(true);

    function AddRow(){

        let arr = numbers;
        let lastElem = arr[arr.length -1];
        lastElem += 1;
        arr.push(lastElem);
        setNumbers(arr);
        console.log(numbers);
        
        if(change){
            setChange(false)
        }else{
            setChange(true)
        }
    }
    function DelRow(e){
        let number = e.target.parentNode.parentNode.attributes["number"].value;
        number = Number(number);
        let element = document.getElementById("participant_" + number);
        element.parentNode.removeChild(element);

        //i must create some loop which will change the numbers
        //start with number+1

        let rowLength = numbers.length;

        let current = numbers;
        current.pop()
        setNumbers(current)

        // let elemaaa = e.target.parentNode.parentNode;
        // console.log(elemaaa)
        // for (let i = number+1; i < rowLength; i++) {
        //     let elem = e.target.parentNode.parentNode;
        //     console.log(elem)
        //     let newValue = number - 1;
        //     elem.setAttribute("key","participant_"+newValue)
        //     let firstElem = elem.children[0];
        //     firstElem.innerHTML = newValue;
        //     elem.setAttribute("id","participant_"+newValue)
            
        // }

        // arr.pop();

        // setNumbers(arr);
        // if(change){
        //     setChange(false)
        // }else{
        //     setChange(true)
        // }

    }
    useEffect(
        ()=>{
            console.log("changing")
        },[change]
    )
    return (
        <div className="santa-Main">
            <h1 className="title-santa"> Тайный Санта </h1>
            <table className="table" id="table-id">
                <thead>
                    <tr>
                        <th className="participant-number-header">#</th>
                        <th>участников</th>
                        <th>Электронная почта</th>
                        <th className="col-xs-3"></th>
                    </tr>
                </thead>

                <tbody>
                {
                    numbers.map(
                        elem =>{
                            return (
                                <tr className="participant owner" key={"participant_"+elem} id = {"participant_"+elem} number={elem}>

                                <td className="participant-number">{elem}</td>
                                <td><input type="text" required="required" className="participant-name form-control" /></td>
                                <td><input type="text" id="party_participants_1_email" required="required" className="participant-mail form-control" /></td>
                                <td>
                                    <button onClick={(e)=>DelRow(e)}>Delete</button>
                                </td>
                            </tr>
                            )
                        }
                    )
                }
                </tbody>
            </table>
            <button onClick={AddRow}>Add</button>
        </div>
    )
}



export default SecretSanta;


















































































































































































// function SecretSanta() {
//     const [numbers, SetNumbers] = useState([1,2]);

//     function getData() {
//         let length = document.getElementsByTagName("tr").length - 1;
//         let sendingData = {}
//         for (let i = 1; i < length + 1; i++) {
//             let elems = document.getElementsByTagName("tr")[i].children;//td td td // number ,name, email
//             let name = elems[1].firstChild.value;
//             let mail = elems[2].firstChild.value;
//             sendingData[name] = mail;
//         }

//         fetch(
//             '/api/santa',
//             {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify(sendingData)
//             })
//             // .then(function(res){ console.log(res) })
//             // .catch(function(res){ console.log(res) })
//     }

//     function AddTr(){
//         let tableId = document.getElementById("table-id")
//         let table_body = tableId.children[1]
//         let tr = document.createElement("tr")
//         tr.className = "participant owner";

//         let arr = numbers;
//         let lastNumber = arr[arr.length - 1]
//         lastNumber += 1;
//         arr.push(lastNumber);
//         SetNumbers(arr)
//         tr.setAttribute("queue",lastNumber);
//         tr.innerHTML = `
//         <td className="participant-number">${numbers[numbers.length - 1 ]}</td>
//                         <td><input type="text" id={"party_participants_"+count+"_name"} required="required" className="participant-name form-control" /></td>
//                         <td><input type="text" id="party_participants_2_email"  required="required" className="participant-mail form-control" /></td>
//                         <td>
//                             <button type="button" className="btn-danger">
//                             <i className="fa fa-times-circle fa-inverse"></i> <span className="text_remove">Удалить</span>

//                             </button>
//                         </td>
//         `
//         table_body.append(tr)

//         let DeleteButtons = document.getElementsByClassName("btn-danger")
//         console.log(DeleteButtons)
//     }

//     function deleteRow(e){
//         console.log()
//         let row = e.target.parentNode.parentNode.parentNode;
//         let attr = row.attributes.queue.value;
//         console.log(attr);
//         let tableId = document.getElementById("table-id")
//         let table_body = tableId.children[1];
//         table_body.removeChild(table_body.childNodes[attr-1])
//         let array = numbers;
//         array.pop()
//         SetNumbers(array)

//     }
//     return (
//         <div className="santa-Main">
//             <h1 className="title-santa"> Тайный Санта </h1>
//             <table className="table" id="table-id">
//                 <thead>
//                     <tr>
//                         <th className="participant-number-header">#</th>
//                         <th>участников</th>
//                         <th>Электронная почта</th>
//                         <th className="col-xs-3"></th>
//                     </tr>
//                 </thead>

//                 <tbody>
//                     <tr className="participant owner" queue={numbers[0]}>
//                         <td className="participant-number">{numbers[0]}</td>
//                         <td><input type="text" id={"party_participants_"+numbers[0]+"_name"} required="required" className="participant-name form-control" /></td>
//                         <td><input type="text" id="party_participants_1_email"  required="required" className="participant-mail form-control" /></td>
//                         <td  >
//                         <button type="button" className="btn-danger">
//                                 <i className="fa fa-times-circle fa-inverse"></i> <span className="text_remove" onClick={deleteRow}>Удалить</span>
//                             </button>
//                         </td>
//                     </tr>

//                     <tr className="participant not-owner" queue={numbers[1]}>
//                         <td className="participant-number">{numbers[1]}</td>
//                         <td><input type="text" id={"party_participants_"+numbers[1]+"_name"} required="required" className="participant-name form-control" /></td>
//                         <td><input type="text" id="party_participants_2_email"  required="required" className="participant-mail form-control" /></td>
//                         <td  >
//                         <button type="button" className="btn-danger">

//                                 <i className="fa fa-times-circle fa-inverse"></i> <span className="text_remove" onClick={deleteRow}>Удалить</span>
//                             </button>
//                         </td>
//                     </tr>
//                     {/* <tr className="participant not-owner                            ">
//                         <td className="participant-number">3</td>
//                         <td><input type="text" id="party_participants_2_name" name="party[participants][2][name]" required="required" data-hj-masked="" className="participant-name form-control" /></td>
//                         <td><input type="text" id="party_participants_2_email" name="party[participants][2][email]" required="required" data-hj-masked="" className="participant-mail form-control" /></td>
//                         <td  >
//                             <button type="button" classNameName="btn btn-mini btn-danger remove-participant disabled">
//                                 <i className="fa fa-times-circle fa-inverse"></i> <span className="text_remove">Удалить</span>
//                             </button>
//                         </td>
//                     </tr> */}
//                 </tbody>
//             </table>
//             <button onClick={AddTr}>Add</button>
//             <br/>
//             <br/>
//             <br/>
//             <button onClick={getData}>Click</button>
//         </div>
//     )
// }

// export default SecretSanta;

