import './Page.css'
const Page = ({
    display,
    pageName,
    header,
    children}
) => (
    <section className={"container page " + (display ? 'show' : '')} 
    id={pageName}>
        <div className="page__header row" >
            {header ? header : (<h2>{pageName}</h2>)}
        </div>
        <div className="page__content row">
            {children}
        </div>
    </section>
);
export default Page;