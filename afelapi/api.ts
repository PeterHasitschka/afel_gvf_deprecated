
import {AfelDataFetcher} from "./datafetcher";
//var GVF = new GvfApi();

//console.log(GVF);

AfelDataFetcher.getInstance().fetchData().then(() => {
    console.log("Creating two basic planes");
    //this.addPlane(new Plane("Resource Graph", 'resource', this.uiService));
    //this.addPlane(new Plane("Learner Graph", 'learner', this.uiService));
});

