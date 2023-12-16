

import ContactPriority from "../components/ContactPriority"
import RegisterAccount from "../components/RegisterAccount"

export default function App () {

    return(
        <> 
            <div className="max-w-3xl bg-slate-900 border-solid border-2 border-slate-400 rounded-md">
            <h1 className="text-center m-4 text1 text-4xl">CEPC Contact Tracking</h1>
            <ContactPriority />
            </div>
            <div className="max-w-3xl bg-slate-900 border-solid border-2 border-slate-400 rounded-md">
            <RegisterAccount />
            </div>
        </>

    )
};
