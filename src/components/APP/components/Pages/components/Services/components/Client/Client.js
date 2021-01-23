const Client = ({clientItems}) => (
    clientItems.map(({
        href,
        clientIcon
    },index ) => (
        <div className="client col-sm-4 col-md-2" key={index}>
            <div className="client__logo">
                <a href={href} target="_blank">
                    <img src={clientIcon} />
                </a>
            </div>
        </div>
    ))
);
export default Client;