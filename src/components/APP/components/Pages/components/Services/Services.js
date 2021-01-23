import './Services.css';
import Page from '../../../Page/Page'
import webDesignIcon from './assets/img/web_design_icon.png';
import photographyIcon from './assets/img/photography_icon.png';
import managementIcon from './assets/img/management_icon.png';
import advertisingIcon from './assets/img/advertising_icon.png'
import clientIcon from '/assets/img/client_1.png';
import Service from './components/Service/Service';
import Client from './components/Client/Client';
const Services = ({display}) => (
    <Page display={display} pageName={'Services'}>
        <div className="row">
            <h3 className="col-sm-12 col-md-12">My <span>Services</span></h3>
                <Service serviceItems={
                    [{
                        icon : webDesignIcon,
                        serviceName: 'Web Design',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.'
                    },{
                        icon : photographyIcon,
                        serviceName: 'Photography',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.'
                    },{
                        icon : managementIcon,
                        serviceName: 'Management',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.'
                    },{
                        icon : advertisingIcon,
                        serviceName: 'Avertising',
                        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.'
                    }]
                }/>
        </div>
        <div className="row">
            <h3 className="col-sm-12 col-md-12">Clients</h3>
            <Client clientItems={[   
                    {href:'#', clientIcon:clientIcon},
                    {href:'#', clientIcon:clientIcon},
                    {href:'#', clientIcon:clientIcon},
                    {href:'#', clientIcon:clientIcon},
                    {href:'#', clientIcon:clientIcon},
                    {href:'#', clientIcon:clientIcon},
                ]}/>
        </div>
    </Page>
)

export default Services;