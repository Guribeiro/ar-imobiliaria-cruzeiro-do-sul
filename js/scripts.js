
const btnOeste = document.querySelector('#btnOeste')
const btnLeste = document.querySelector('#btnLeste')
const btnNorte = document.querySelector('#btnNorte')
const btnSul = document.querySelector('#btnSul')
const btnCentro = document.querySelector('#btnCentro')

btnLeste.onclick = function tableLeste() {
    var container = document.querySelector("#table-bairros");
    container.innerHTML = [
        '<table>',
        '<thead>',
        '<tr>',
        '<th>Bairros</th>',
        '<th>Valor Médio - Aluguel</th>',
        '<th>Valor Médio - Venda </th>',
        '</tr>',
        '</thead>',
        '<tbody>',
        '<tr>',
        '<td>São Miguel</td>',
        '<td>R$ 1.500</td>',
        '<td>R$ 240.000</td>',
        '</tr>',
        '<tr>',
        '<td>Itaquera</td>',
        '<td>R$ 2.000</td>',
        '<td>R$ 270.000</td>',
        '</tr>',
        '<tr>',
        '<td>Penha</td>',
        '<td>R$ 1.600</td>',
        '<td>R$ 250.000</td>',
        '</tr>',
        '<tr>',
        '<td>Guaianazes</td>',
        '<td>R$ 1.550</td>',
        '<td>R$ 245.000</td>',
        '</tr>',
        '</tbody>',
        '</table>'
    ].join("\n");
}

btnOeste.onclick = function table(){
    var container = document.querySelector("#table-bairros");
    container.innerHTML = [
        '<table>',
        '<thead>',
        '<tr>',
        '<th>Bairros</th>',
        '<th>Valor Médio - Aluguel</th>',
        '<th>Valor Médio - Venda </th>',
        '</tr>',
        '</thead>',
        '<tbody>',
        '<tr>',
        '<td>Vila Madalena</td>',
        '<td>R$ 1.500</td>',
        '<td>R$ 240.000</td>',
        '</tr>',
        '<tr>',
        '<td>Butantã</td>',
        '<td>R$ 2.000</td>',
        '<td>R$ 270.000</td>',
        '</tr>',
        '<tr>',
        '<td>Morumbi</td>',
        '<td>R$ 1.600</td>',
        '<td>R$ 250.000</td>',
        '</tr>',
        '<tr>',
        '<td>Itaim Bibi</td>',
        '<td>R$ 1.550</td>',
        '<td>R$ 245.000</td>',
        '</tr>',
        '</tbody>',
        '</table>'
    ].join("\n");
}

btnNorte.onclick = function table(){
    var container = document.querySelector("#table-bairros");
    container.innerHTML = [
        '<table>',
        '<thead>',
        '<tr>',
        '<th>Bairros</th>',
        '<th>Valor Médio - Aluguel</th>',
        '<th>Valor Médio - Venda </th>',
        '</tr>',
        '</thead>',
        '<tbody>',
        '<tr>',
        '<td>Santana</td>',
        '<td>R$ 1.500</td>',
        '<td>R$ 240.000</td>',
        '</tr>',
        '<tr>',
        '<td>Tucuruvi</td>',
        '<td>R$ 2.000</td>',
        '<td>R$ 270.000</td>',
        '</tr>',
        '<tr>',
        '<td>Parada Inglesa</td>',
        '<td>R$ 1.600</td>',
        '<td>R$ 250.000</td>',
        '</tr>',
        '<tr>',
        '<td>Mandaqui</td>',
        '<td>R$ 1.550</td>',
        '<td>R$ 245.000</td>',
        '</tr>',
        '</tbody>',
        '</table>'
    ].join("\n");
}

btnSul.onclick = function table(){
    var container = document.querySelector("#table-bairros");
    container.innerHTML = [
        '<table>',
        '<thead>',
        '<tr>',
        '<th>Bairros</th>',
        '<th>Valor Médio - Aluguel</th>',
        '<th>Valor Médio - Venda </th>',
        '</tr>',
        '</thead>',
        '<tbody>',
        '<tr>',
        '<td>Vila Mariana</td>',
        '<td>R$ 1.500</td>',
        '<td>R$ 240.000</td>',
        '</tr>',
        '<tr>',
        '<td>Morumbi</td>',
        '<td>R$ 2.000</td>',
        '<td>R$ 270.000</td>',
        '</tr>',
        '<tr>',
        '<td>Ipiranga</td>',
        '<td>R$ 1.600</td>',
        '<td>R$ 250.000</td>',
        '</tr>',
        '<tr>',
        '<td>Moema</td>',
        '<td>R$ 1.550</td>',
        '<td>R$ 245.000</td>',
        '</tr>',
        '</tbody>',
        '</table>'
    ].join("\n");
}

btnCentro.onclick = function table(){
    var container = document.querySelector("#table-bairros");
    container.innerHTML = [
        '<table>',
        '<thead>',
        '<tr>',
        '<th>Bairros</th>',
        '<th>Valor Médio - Aluguel</th>',
        '<th>Valor Médio - Venda </th>',
        '</tr>',
        '</thead>',
        '<tbody>',
        '<tr>',
        '<td>Barra Funda</td>',
        '<td>R$ 1.500</td>',
        '<td>R$ 240.000</td>',
        '</tr>',
        '<tr>',
        '<td>República</td>',
        '<td>R$ 2.000</td>',
        '<td>R$ 270.000</td>',
        '</tr>',
        '<tr>',
        '<td>Bom Retiro</td>',
        '<td>R$ 1.600</td>',
        '<td>R$ 250.000</td>',
        '</tr>',
        '<tr>',
        '<td>Sé</td>',
        '<td>R$ 1.550</td>',
        '<td>R$ 245.000</td>',
        '</tr>',
        '</tbody>',
        '</table>'
    ].join("\n");
}











