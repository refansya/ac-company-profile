import { cn } from "@/lib/utils";

interface Props {

    children:React.ReactNode;

    className?:string;

}

export default function GlassCard({

children,

className

}:Props){

return(

<div

className={cn(

`
relative

overflow-hidden

rounded-[28px]

border

border-white/30

bg-white/70

backdrop-blur-3xl

shadow-[0_30px_80px_rgba(8,17,32,.12)]

`,

className

)}

>

<div

className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-blue-100/20"

/>

<div className="relative z-10">

{children}

</div>

</div>

)

}