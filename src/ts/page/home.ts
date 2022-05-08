const tblLeft = document.querySelector<HTMLTableElement>('#tbl-left')!;
const tblRight = document.querySelector<HTMLTableElement>('#tbl-right')!;


tblLeft.addEventListener('click',removeTask);
tblRight.addEventListener('click',addTasks);

function removeTask(e:Event){
    if ((e.target as HTMLElement).classList.contains('fa-hand-point-right')){
        const elm = e.target as HTMLElement;
        let row = elm.closest('tr')!;
        let td = row.querySelector('td')!;
        let nodes = td.querySelectorAll('div');
        const date=nodes[0].innerText;
        const des=nodes[1].innerText;
        const note=nodes[2].innerText;
        row.remove();

        const newRow = document.createElement('tr');
        newRow.innerHTML=`<td>
                           <div class="isbn">${date}</div>
                           <div class="book-name text-bold">${des}</div>
                           <div class="book-author">${note}</div>
                          </td>
                           <td class="trash">
                            <i class="fas fa-hand-point-left"></i>
                           </td>`;

        tblRight.querySelector('tbody')!.append(newRow);

    }
}

function addTasks(e:Event){
    if ((e.target as HTMLElement).classList.contains('fa-hand-point-left')){
        const elm = e.target as HTMLElement;
        let row = elm.closest('tr')!;
        let td = row.querySelector('td')!;
        let nodes = td.querySelectorAll('div');
        const date=nodes[0].innerText;
        const des=nodes[1].innerText;
        const note=nodes[2].innerText;
        row.remove();
        const newRow = document.createElement('tr');
        newRow.innerHTML=`<td>
                           <div class="isbn">${date}</div>
                           <div class="book-name text-bold">${des}</div>
                           <div class="book-author">${note}</div>
                          </td>
                           <td class="trash">
                            <i class="fas fa-hand-point-right"></i>
                           </td>`;

        tblLeft.querySelector('tbody')!.append(newRow);

    }
}