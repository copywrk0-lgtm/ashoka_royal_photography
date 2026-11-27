export function MediaImage({src,alt='',className=''}:{src:string;alt?:string;className?:string}){return <img className={className} src={src} alt={alt} loading="lazy"/>}
