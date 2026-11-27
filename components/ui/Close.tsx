import {X} from 'lucide-react'; export function Close({onClick}:{onClick:()=>void}){return <button className="close-story" onClick={onClick}><X size={22}/><span>CLOSE</span></button>}
