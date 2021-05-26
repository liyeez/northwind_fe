sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function (Controller) {
    "use strict";

    return Controller.extend("sap.btp.sapui5.controller.List",{
        onInit: function () {
            this.serviceURL = this.getOwnerComponent().getManifestEntry("/sap.app/dataSources/HANA/uri");
            console.log(this.serviceURL);
        },

        handleListItemPress: function (oEvent) {
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this); 
            //get router object
            var selectedProductId = oEvent.getSource().getBindingContext().getProperty("ProductID");
            //get the product's ID clicked on through the context from the event
            oRouter.navTo("detail", {
                productId: selectedProductId
            }); // navigate to new view
        }
    })
});