/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
jQuery.sap.declare("sap.ui.commons.RichTooltipRenderer");jQuery.sap.require("sap.ui.core.ValueStateSupport");sap.ui.commons.RichTooltipRenderer={};
sap.ui.commons.RichTooltipRenderer.render=function(r,R){var i=R.getId();r.write("<div ");r.writeControlData(R);r.addClass("sapUiRtt");r.writeClasses();r.write(" ><div><div>");r.write("<div class='sapUiRttTopL'></div><div class='sapUiRttTopR'></div>");r.write("<div class='sapUiRttCL'>");r.write("<div class='sapUiRttCR'>");r.write("<div class='sapUiRttContent'>");var t=R.getTitle();if(t){r.write("<div id='"+i+"-title' role='tooltip' class='sapUiRttTitle'>");r.writeEscaped(t);r.write("</div>");r.write("<div class='sapUiRttSep'></div>")}var v=sap.ui.core.ValueStateSupport.getAdditionalText(R.getParent());var I=R.getAggregation("individualStateText");if(v||I){r.write('<div class="sapUiRttValueStateContainer">');if(v){var V=R.getParent().getValueState();var s=V!==sap.ui.core.ValueState.None?"ValueState_"+V+".png":"";if(s!==""){s=jQuery.sap.getModulePath("sap.ui.commons",'/')+"themes/"+sap.ui.getCore().getConfiguration().getTheme()+"/img/richtooltip/"+s;r.write('<img id="'+i+'-valueStateImage" class="sapUiRttValueStateImage" src="');r.writeEscaped(s);r.write('"/>')}}if(I){r.renderControl(I)}else{r.write('<div id="'+i+'-valueStateText" class="sapUiRttValueStateText">');r.writeEscaped(v);r.write('</div>')}r.write('</div>');r.write("<div class='sapUiRttSep'></div>")}r.write('<div class="sapUiRttContentContainer">');var a=R.getImageSrc();if(a){var A=R.getImageAltText();r.write('<img id="'+i+'-image" alt="'+A+'" class="sapUiRttImage" src="');r.writeEscaped(a);r.write('"/>')}var T=R.getAggregation("formattedText");if(T){r.renderControl(T)}r.write('</div>');r.write("</div></div></div>");r.write("<div class='sapUiRttBotL'></div>");r.write("<div class='sapUiRttBotR'></div>");r.write("</div></div></div>")};