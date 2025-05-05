let claus = 'Claus Smith';
let Bobb = 'Bobb Martin';
let popo = 'popo doss';
let kaka = 'kaka Shookup';
let vvss = 'vvss Banks';
let shivam = 'Shivam Desale';
const element = (
    <ul style={{'color':'blue', 'fontSize': '24px'}}>
        <li>{claus}</li>
        <li>{Bobb}</li>
        <li>{popo}</li>
        <li>{kaka}</li>
        <li>{vvss}</li>
        <li>{shivam}</li>
    </ul>
)
ReactDOM.render(element, document.getElementById('root'))