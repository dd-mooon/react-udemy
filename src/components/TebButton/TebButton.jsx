export default function TebButton({ label, onSelect }) {

    return (
        <li><button onClick={onSelect}>{label}</button></li>
    )
}