export default function Home() {
    return (
        <div>
            Home
            <Contador />
        </div>
    )
}

function Contador() {
    const [numero, setNumero] = useState(0);
    function adicionarContador (){
        setNumero(numero + 1);
    }

    return (
        <div>
            <div>
                {numero}
            </div>
            <button onClick={adicionarContador}>Adicionar</button>
        </div>
    )
}
        