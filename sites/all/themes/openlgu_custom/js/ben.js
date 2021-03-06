
// Expand Collapse Comments Form on Project Table
jQuery(document).ready(function(){
//	jQuery(".view-project-list-leaflet-map div.comments").hide();
	jQuery(".view-project-list-leaflet-map a.comment-link").click(function(){
		jQuery(".view-project-list-leaflet-map div.comments").slideToggle();
	});
});

// Clear Value on Search input field on focus
jQuery(document).ready(function(){
	jQuery("#views-exposed-form-projects-search-results-page input[type=text]").focus(function(){
		jQuery("#views-exposed-form-projects-search-results-page input[type=text]").val("");
	});
});

///responsify videos

jQuery(function() {

// Find all YouTube videos
var allVideos = jQuery("iframe[src^='//player.vimeo.com']"),

    // The element that is fluid width
    fluidEl = jQuery(".views-field-field-embedded-video");

// Figure out and save aspect ratio for each video
allVideos.each(function() {

  jQuery(this)
    .data('aspectRatio', this.height / this.width)

    // and remove the hard coded width/height
    .removeAttr('height')
    .removeAttr('width');

});

// When the window is resized
jQuery(window).resize(function() {

  var newWidth = fluidEl.width();

  // Resize all videos according to their own aspect ratio
  allVideos.each(function() {

    var el = jQuery(this);
    el.width(newWidth).height(newWidth * el.data('aspectRatio'));

  });

// Kick off one resize to fix all videos on page load
}).resize();

});

/* Comments Form Show Picture, Video, and KML forms when click icon */
jQuery(document).ready(function(){
	jQuery("div#add-picture").click(function(){
		jQuery(".comment-form div.field-name-field-add-a-photo").fadeIn();
	});
	jQuery("div#add-video").click(function(){
		jQuery(".comment-form div.field-name-field-embed-video").fadeIn();
	});
	jQuery("div#add-kml").click(function(){
		jQuery(".comment-form div.field-name-field-add-a-kml-file").fadeIn();
	});
});

/* In Projects "Refine By" form, make 2015 and 2016 checkboxes unclickable */
jQuery(document).ready(function(){
	// jQuery("input#edit-field-gaa-year-value-2015").prop('disabled',true);
	jQuery("input#edit-field-gaa-year-value-2016").prop('disabled',true);
});

// Disable 2015/2016 on Project Node Add Form  
jQuery(document).ready(function(){
	//jQuery(".node-openlgu_project-form .form-item-field-gaa-year-und select option[value=2015]").prop('disabled',true);
	jQuery(".node-openlgu_project-form .form-item-field-gaa-year-und select option[value=2016]").prop('disabled',true);
});
// Collapse tabs on exposed project filter; expand on click 
jQuery(document).ready(function(){
	jQuery("#views-exposed-form-project-list-leaflet-map-page .views-widget").hide(); 
	jQuery("#views-exposed-form-project-list-leaflet-map-page label").click(function(){
			if (jQuery(this).parent().hasClass("expanded")){
				jQuery(this).next(".views-widget").slideUp();
				jQuery(this).parent("div.expanded").removeClass("expanded");
			} else if (!jQuery(this).hasClass('option')) {
				jQuery(this).next(".views-widget").slideDown();
				jQuery(this).parent("div.expanded").removeClass("expanded");
				var filteridentity = jQuery(this).parent().attr("id");
				jQuery("#views-exposed-form-project-list-leaflet-map-page #"+filteridentity+" .views-widget").slideDown();
				jQuery("#views-exposed-form-project-list-leaflet-map-page #"+filteridentity+" .views-widget").parent().addClass("expanded");	
			}
		
	});
});

// Collapse tabs on exposed map filter; expand on click 
jQuery(document).ready(function(){
	jQuery("#views-exposed-form-project-list-leaflet-map-page-1 .views-widget").hide(); 
	jQuery("#views-exposed-form-project-list-leaflet-map-page-1 label").click(function(){
		if (jQuery(this).parent().hasClass("expanded")){
			jQuery("#views-exposed-form-project-list-leaflet-map-page-1 .expanded .views-widget").slideToggle();
			jQuery("#views-exposed-form-project-list-leaflet-map-page-1 div.expanded").removeClass("expanded");
		} else if (!jQuery(this).hasClass('option')) {
			jQuery("#views-exposed-form-project-list-leaflet-map-page-1 .expanded .views-widget").slideToggle();
			jQuery("#views-exposed-form-project-list-leaflet-map-page-1 div.expanded").removeClass("expanded");
			var filteridentity = jQuery(this).parent().attr("id");
			jQuery("#views-exposed-form-project-list-leaflet-map-page-1 #"+filteridentity+" .views-widget").slideToggle();
			jQuery("#views-exposed-form-project-list-leaflet-map-page-1 #"+filteridentity+" .views-widget").parent().addClass("expanded");	
		}	
	});
});

// Expand Collapse Comments Form on Project Table
jQuery(document).ready(function(){
//	jQuery(".view-project-list-leaflet-map div.comments").hide();
	jQuery(".view-project-list-leaflet-map a.comment-link").click(function(){
		jQuery(".view-project-list-leaflet-map div.comments").slideToggle();
	});
});

// Clear Value on Search input field on focus
jQuery(document).ready(function(){
	jQuery("#views-exposed-form-projects-search-results-page input[type=text]").focus(function(){
		jQuery("#views-exposed-form-projects-search-results-page input[type=text]").val("");
	});
});

// Show 2013/2014 year switchers on Dashboard page
jQuery(document).ready(function(){
	// Hide the 2014 graphs
	jQuery("div.view-id-projects_by_agency.view-display-id-block_2").hide();
	jQuery("div.view-id-dashboards_projects_by_region.view-display-id-block_5").hide();
	jQuery("div.view-dashboards-projects-by-project-type.view-display-id-block_2").hide();
	jQuery("div.view-id-mini_graphs_block_take_2_.view-display-id-block_3").hide();
	jQuery("div.view-id-mini_graphs_block_take_2_.view-display-id-block_2").hide();
	
	// Set the 2013 toggle as "active"
	jQuery(".mini-graph-switcher li:first-child").addClass("active");
		
	// On click of Projects by Agency switcher, do something
	/*jQuery("#mini-graph-block-3 li").click(function(){
		
		// Hide all
		jQuery("div.view-id-projects_by_agency").hide();
		
		// Unactive the toggle
		jQuery("#mini-graph-block-3 li.active").removeClass("active");
				
		// Determine what was clicked
		var value = jQuery(this).attr("class");
		
		// Show appropriate graphs depending on what was clicked
		if(value.indexOf("2013") !== -1) { 
			jQuery("div.view-id-projects_by_agency.view-display-id-block_1").fadeIn(); 
			jQuery("#mini-graph-block-3 li:first-child").addClass("active");
			
		}
		if(value.indexOf("2014") !== -1) { 
			jQuery("div.view-id-projects_by_agency.view-display-id-block_2").fadeIn(); 
			jQuery("#mini-graph-block-3 li:last-child").addClass("active");
		}
		if(value.indexOf("2015") !== -1) { 
			jQuery("div.view-id-projects_by_agency.view-display-id-block_3").fadeIn(); 
			jQuery("#mini-graph-block-3 li:last-child").addClass("active");
		}
	});

	// On click of Projects by Region swticher, do something
	jQuery("#mini-graph-block-4 li").click(function(){
		
		// Hide all
		jQuery("div.view-id-dashboards_projects_by_region").hide();
		
		// Unactive the Toggle
		jQuery("#mini-graph-block-4 li.active").removeClass("active");
				
		// Determine what was clicked
		var value = jQuery(this).attr("class");
		
		// Show appropriate graphs depending on what was clicked
		if(value.indexOf("2013") !== -1) { 
			jQuery("div.view-id-dashboards_projects_by_region.view-display-id-block_4").fadeIn();
			jQuery("#mini-graph-block-4 li:first-child").addClass("active"); 
		}
		if(value.indexOf("2014") !== -1) { 
			jQuery("div.view-id-dashboards_projects_by_region.view-display-id-block_5").fadeIn(); 
			jQuery("#mini-graph-block-4 li:last-child").addClass("active");
		}
		if(value.indexOf("2015") !== -1) { 
			jQuery("div.view-id-dashboards_projects_by_region.view-display-id-block_6").fadeIn(); 
			jQuery("#mini-graph-block-4 li:last-child").addClass("active");
		}
	});

	// On click of Projects by Project Type swticher, do something
	jQuery("#mini-graph-block-5 li").click(function(){
		
		// Hide all
		jQuery("div.view-dashboards-projects-by-project-type").hide();
		
		// Unactive the Toggle
		jQuery("#mini-graph-block-5 li.active").removeClass("active");
				
		// Determine what was clicked
		var value = jQuery(this).attr("class");
		
		// Show appropriate graphs depending on what was clicked
		if(value.indexOf("2013") !== -1) { 
			jQuery("div.view-dashboards-projects-by-project-type.view-display-id-block_1").fadeIn();
			jQuery("#mini-graph-block-5 li:first-child").addClass("active"); 
		}
		if(value.indexOf("2014") !== -1) { 
			jQuery("div.view-dashboards-projects-by-project-type.view-display-id-block_2").fadeIn(); 
			jQuery("#mini-graph-block-5 li:last-child").addClass("active");
		}
		if(value.indexOf("2015") !== -1) { 
			jQuery("div.view-dashboards-projects-by-project-type.view-display-id-block_3").fadeIn(); 
			jQuery("#mini-graph-block-5 li:last-child").addClass("active");
		}
	});
	
	// On click of Status of GPB Projects Switcher, do something
	jQuery("#mini-graph-block-1 li").click(function(){
		
		// Hide all 
		jQuery("div.view-id-mini_graphs_block_take_2_.view-display-id-block").hide();
		jQuery("div.view-id-mini_graphs_block_take_2_.view-display-id-block_2").hide();
		jQuery("div.view-id-mini_graphs_block_take_2_.view-display-id-block_3").hide();
		
		//Unactive the Toggle 
		jQuery("#mini-graph-block-1 li.active").removeClass("active");
		
		// Determine what was clicked 
		var value = jQuery(this).attr("class");
		
		// Show appropriate graph depending on what was clicked
		if(value.indexOf("2013") !== -1) {
			jQuery("div.view-id-mini_graphs_block_take_2_.view-display-id-block").fadeIn();
			jQuery("#mini-graph-block-1 li:first-child").addClass("active");
		}
		if(value.indexOf("2014") !== -1) {
			jQuery("div.view-id-mini_graphs_block_take_2_.view-display-id-block_2").fadeIn();
			jQuery("#mini-graph-block-1 li:last-child").addClass("active");
		}
		if(value.indexOf("2015") !== -1) {
			jQuery("div.view-id-mini_graphs_block_take_2_.view-display-id-block_3").fadeIn();
			jQuery("#mini-graph-block-1 li:last-child").addClass("active");
		}
	});
	
	// On click of Budget of GPB Projects Switcher, do something
	jQuery("#mini-graph-block-2 li").click(function(){
		
		// Hide all 
		jQuery("div.view-id-mini_graphs_block_take_2_.view-display-id-block_1").hide();
		jQuery("div.view-id-mini_graphs_block_take_2_.view-display-id-block_3").hide();
		jQuery("div.view-id-mini_graphs_block_take_2_.view-display-id-block_5").hide();
		
		//Unactive the Toggle 
		jQuery("#mini-graph-block-2 li.active").removeClass("active");
		
		// Determine what was clicked 
		var value = jQuery(this).attr("class");
		
		// Show appropriate graph depending on what was clicked
		if(value.indexOf("2013") !== -1) {
			jQuery("div.view-id-mini_graphs_block_take_2_.view-display-id-block_1").fadeIn();
			jQuery("#mini-graph-block-2 li:first-child").addClass("active");
		}
		if(value.indexOf("2014") !== -1) {
			jQuery("div.view-id-mini_graphs_block_take_2_.view-display-id-block_3").fadeIn();
			jQuery("#mini-graph-block-2 li:last-child").addClass("active");
		}
		if(value.indexOf("2014") !== -1) {
			jQuery("div.view-id-mini_graphs_block_take_2_.view-display-id-block_5").fadeIn();
			jQuery("#mini-graph-block-2 li:last-child").addClass("active");
		}
	});*/
	
	// On click of Projects by Agency switcher, do something
	jQuery(".view-id-projects_by_agency").hide();
	jQuery(".view-id-projects_by_agency.view-display-id-block_1").show();
	jQuery("#mini-graph-block-3 li").click(function(){
		var value = jQuery(this).attr("class");

		//Unactive the Toggle 
		jQuery("#mini-graph-block-3 li").removeClass("active");
		jQuery(this).addClass("active");

		// Hide all 
		jQuery(".view-id-projects_by_agency.view-display-id-block_1").hide();
		jQuery(".view-id-projects_by_agency.view-display-id-block_2").hide();
		jQuery(".view-id-projects_by_agency.view-display-id-block_3").hide();

		// Show appropriate graph depending on what was clicked
		if(value == "2013"){
			jQuery(".view-id-projects_by_agency.view-display-id-block_1").fadeIn();
		}else if(value == "2014"){
			jQuery(".view-id-projects_by_agency.view-display-id-block_2").fadeIn();
		}else if(value == "2015"){
			jQuery(".view-id-projects_by_agency.view-display-id-block_3").fadeIn();
		}
	});	
	
	// On click of Projects by Region swticher, do something
	jQuery(".view-id-dashboards_projects_by_region").hide();
	jQuery(".view-id-dashboards_projects_by_region.view-display-id-block_4").show();
	jQuery("#mini-graph-block-4 li").click(function(){
		var value = jQuery(this).attr("class");

		//Unactive the Toggle 
		jQuery("#mini-graph-block-4 li").removeClass("active");
		jQuery(this).addClass("active");

		// Hide all 
		jQuery(".view-id-dashboards_projects_by_region.view-display-id-block_4").hide();
		jQuery(".view-id-dashboards_projects_by_region.view-display-id-block_5").hide();
		jQuery(".view-id-dashboards_projects_by_region.view-display-id-block_6").hide();

		// Show appropriate graph depending on what was clicked
		if(value == "2013"){
			jQuery(".view-id-dashboards_projects_by_region.view-display-id-block_4").fadeIn();
		}else if(value == "2014"){
			jQuery(".view-id-dashboards_projects_by_region.view-display-id-block_5").fadeIn();
		}else if(value == "2015"){
			jQuery(".view-id-dashboards_projects_by_region.view-display-id-block_6").fadeIn();
		}
	});	

	// On click of Projects by Project Type swticher, do something
	jQuery(".view-id-dashboards_projects_by_project_type").hide();
	jQuery(".view-id-dashboards_projects_by_project_type.view-display-id-block_1").show();
	jQuery("#mini-graph-block-5 li").click(function(){
		var value = jQuery(this).attr("class");

		//Unactive the Toggle 
		jQuery("#mini-graph-block-5 li").removeClass("active");
		jQuery(this).addClass("active");

		// Hide all 
		jQuery(".view-id-dashboards_projects_by_project_type.view-display-id-block_1").hide();
		jQuery(".view-id-dashboards_projects_by_project_type.view-display-id-block_2").hide();
		jQuery(".view-id-dashboards_projects_by_project_type.view-display-id-block_3").hide();

		// Show appropriate graph depending on what was clicked
		if(value == "2013"){
			jQuery(".view-id-dashboards_projects_by_project_type.view-display-id-block_1").fadeIn();
		}else if(value == "2014"){
			jQuery(".view-id-dashboards_projects_by_project_type.view-display-id-block_2").fadeIn();
		}else if(value == "2015"){
			jQuery(".view-id-dashboards_projects_by_project_type.view-display-id-block_3").fadeIn();
		}
	});

	// On click of Status of GPB Projects Switcher, do something
	jQuery(".sop-chart .view-id-mini_graphs_block_take_2_").hide();
	jQuery(".sop-chart .view-display-id-block").show();
	jQuery("#mini-graph-block-1 li").click(function(){
		var value = jQuery(this).attr("class");

		//Unactive the Toggle 
		jQuery("#mini-graph-block-1 li").removeClass("active");
		jQuery(this).addClass("active");

		// Hide all 
		jQuery(".sop-chart .view-display-id-block").hide();
		jQuery(".sop-chart .view-display-id-block_2").hide();
		jQuery(".sop-chart .view-display-id-block_4").hide();

		// Show appropriate graph depending on what was clicked
		if(value == "2013"){
			jQuery(".sop-chart .view-display-id-block").fadeIn();
		}else if(value == "2014"){
			jQuery(".sop-chart .view-display-id-block_2").fadeIn();
		}else if(value == "2015"){
			jQuery(".sop-chart .view-display-id-block_4").fadeIn();
		}
	});

	// On Click of Budget of BUB Projects Switcher, do something
	jQuery(".bop-chart .view-id-mini_graphs_block_take_2_").hide();
	jQuery(".bop-chart .view-display-id-block_1").show();
	jQuery("#mini-graph-block-2 li").click(function(){
		var value = jQuery(this).attr("class");

		//Unactive the Toggle 
		jQuery("#mini-graph-block-2 li").removeClass("active");
		jQuery(this).addClass("active");

		// Hide all 
		jQuery(".bop-chart .view-display-id-block_1").hide();
		jQuery(".bop-chart .view-display-id-block_3").hide();
		jQuery(".bop-chart .view-display-id-block_5").hide();

		// Show appropriate graph depending on what was clicked
		if(value == "2013"){
			jQuery(".bop-chart .view-display-id-block_1").fadeIn();
		}else if(value == "2014"){
			jQuery(".bop-chart .view-display-id-block_3").fadeIn();
		}else if(value == "2015"){
			jQuery(".bop-chart .view-display-id-block_5").fadeIn();
		}
	});
});


/* Switch Upload Photo and Embed Video */
jQuery(document).ajaxComplete(function(){
	jQuery(".flipper-markup a").click(function(){
		jQuery(".flipper-markup a").removeClass("active");
		jQuery("form.comment-form div.field-name-field-add-a-photo").hide();
		jQuery("form.comment-form div.field-name-field-embed-video").hide();
		jQuery("form.comment-form div.field-name-field-add-a-kml-file").hide();
		var selected = jQuery(this).attr('class');
		if (selected == 'embed-video') {
			jQuery("form.comment-form div.field-name-field-embed-video").show();
		} else if (selected == "add-kml") {
			jQuery("form.comment-form div.field-name-field-add-a-kml-file").show();
		} else {
			jQuery("form.comment-form div.field-name-field-add-a-photo").show();
		}
		jQuery(this).addClass("active");
		
	});
});

/* Open Facebook Share Links in New window */
jQuery(document).ready(function($) {
    jQuery('a.service-links-facebook').live('click', function(){
        newwindow=window.open($(this).attr('href'),'','height=300,width=620');
        if (window.focus) {newwindow.focus()}
        return false;
    });
    jQuery('a.service-links-twitter').live('click', function(){
        newwindow=window.open($(this).attr('href'),'','height=250,width=620');
        if (window.focus) {newwindow.focus()}
        return false;
    });
});

/* In Projects "Refine By" form, make 2015 and 2016 checkboxes unclickable */
jQuery(document).ready(function(){
	// jQuery("input#edit-field-gaa-year-value-2015").prop('disabled',true);
	jQuery("input#edit-field-gaa-year-value-2016").prop('disabled',true);
});


// Disable 2015/2016 on Project Node Add Form  
jQuery(document).ready(function(){
	jQuery(".node-openlgu_project-form .form-item-field-gaa-year-und select option[value=2015]").prop('disabled',true);
	jQuery(".node-openlgu_project-form .form-item-field-gaa-year-und select option[value=2016]").prop('disabled',true);
});

// Narrow Down Refine by Municipality on Projects and Maps pages Using Lookup Tables */
jQuery(document).ready(function(){
	// Append extra selects to normal municipality filter
	jQuery(".views-widget-filter-field_municipality_by_psgc_tid div.views-widget").append("<div class='select-region'><select name='select-region'><option value='select'>Select Region</option><option> I</option><option> II</option><option> III</option><option> IV-A</option><option> IV-B</option><option> V</option><option> VI</option><option> VII</option><option> VIII</option><option> IX</option><option> X</option><option> XI</option><option> XII</option><option> XIII</option><option></option></select></div><div class='select-province'><select name='select-province'><option disabled>Select Province</option></select></div><div class='select-municipality'><select name='select-municipality'><option disabled>Select Municipality</option></select></div></div>");

	// clear the current municipality and province
	jQuery("input[name=field_municipality_by_psgc_tid]").val('');
	jQuery("input#edit-field-province-tid").val('');
	jQuery("input#edit-field-region-tid").val('');
	
	jQuery("select[name=select-region]").change(function(){
	
		// get the selected region value & label
		var selectedRegionValue = jQuery(this).val();
		var selectedRegionLabel = jQuery("select[name=select-region] option[value="+selectedRegionValue+"]").text();
		
		// set the Region filter to the label 
		jQuery("input#edit-field-region-tid").val(selectedRegionLabel);

		// clear the current municipality and province
		jQuery("input[name=field_municipality_by_psgc_tid]").val('');
		jQuery("input#edit-field-province-tid").val('');
		
		// get the Regions from the database and build them into the subsequent dropdown.
		jQuery.ajax({
			url: '/ajax/get_provinces?region='+selectedRegionValue,
			success: function(data) {
				jQuery("select[name=select-province]").html("<option>Select Province</option>"+data);
				jQuery(".views-widget-filter-field_municipality_by_psgc_tid select[name=select-province]").trigger("chosen:updated");
			}			
		});
		
	});
	jQuery("select[name=select-province]").change(function(){
	
		// get the selected province value & label
		var selectedProvinceValue = jQuery(this).val();
		var selectedProvinceLabel = jQuery("select[name=select-province] option[value="+selectedProvinceValue+"]").text();

		// clear the current municipality
		jQuery("input[name=field_municipality_by_psgc_tid]").val('');
		
		//set the Province filter to the label
		jQuery("input#edit-field-province-tid").val(selectedProvinceLabel);
		
		// get the Municipalities from the database and build them into the subsequent dropdown.
		jQuery.ajax({
			url: '/ajax/get_municipalities?province='+selectedProvinceValue,
			success: function(data) {
				jQuery("select[name=select-municipality]").html("<option>Select Municipality</option>"+data);
				jQuery(".views-widget-filter-field_municipality_by_psgc_tid select[name=select-municipality]").trigger("chosen:updated");
			}			
		});
		
		
	});
	jQuery("select[name=select-municipality]").change(function(){
		var selectedMunicipality = jQuery(this).val();
		var firstChar = selectedMunicipality.charAt(0);
		if(firstChar == "0") {
			selectedMunicipality = selectedMunicipality.substr(1); 
		}
		jQuery("input[name=field_municipality_by_psgc_tid]").val(selectedMunicipality);		
		
	});
});

// Submit Hidden "Items Per Page" filter in sidebar when fake filter is submitted above table 
jQuery(document).ready(function(){
	jQuery("#header-items-per-page select").change(function(){
		var itemsPerPage = jQuery("#header-items-per-page select").val();
		jQuery(".views-exposed-widgets select[name=items_per_page]").val(itemsPerPage);
		jQuery("form#views-exposed-form-project-list-leaflet-map-page").submit();
	});
});

// Change radios to checkboxes 
jQuery(document).ready(function(){
	var checked = "";
	var radioButton = jQuery("div.form-type-radio input#edit-field-budget-value-all");	
	radioButton.replaceWith('<input type="checkbox" id="edit-field-budget-value-all" name="field_budget_value" value="All" class="form-radio">');
	var radioButton = jQuery("div.form-type-radio input#edit-field-budget-value-1");	
	if(radioButton.attr("checked") != undefined) { checked = radioButton.attr("checked"); } else { checked = ""; }
	radioButton.replaceWith('<input type="checkbox" id="edit-field-budget-value-1" name="field_budget_value" value="1" class="form-radio" '+checked+'>');
	var radioButton = jQuery("div.form-type-radio input#edit-field-budget-value-2");	
	if(radioButton.attr("checked") != undefined) { checked = radioButton.attr("checked"); } else { checked = ""; }
	radioButton.replaceWith('<input type="checkbox" id="edit-field-budget-value-2" name="field_budget_value" value="2" class="form-radio" '+checked+'>');
	var radioButton = jQuery("div.form-type-radio input#edit-field-budget-value-3");	
	if(radioButton.attr("checked") != undefined) { checked = radioButton.attr("checked"); } else { checked = ""; }
	radioButton.replaceWith('<input type="checkbox" id="edit-field-budget-value-3" name="field_budget_value" value="3" class="form-radio" '+checked+'>');
	var radioButton = jQuery("div.form-type-radio input#edit-field-budget-value-4");	
	if(radioButton.attr("checked") != undefined) { checked = radioButton.attr("checked"); } else { checked = ""; }
	radioButton.replaceWith('<input type="checkbox" id="edit-field-budget-value-4" name="field_budget_value" value="4" class="form-radio" '+checked+'>');
	var radioButton = jQuery("div.form-type-radio input#edit-field-budget-value-5");	
	if(radioButton.attr("checked") != undefined) { checked = radioButton.attr("checked"); } else { checked = ""; }
	radioButton.replaceWith('<input type="checkbox" id="edit-field-budget-value-5" name="field_budget_value" value="5" class="form-radio" '+checked+'>');
	var radioButton = jQuery("div.form-type-radio input#edit-field-budget-value-6");	
	if(radioButton.attr("checked") != undefined) { checked = radioButton.attr("checked"); } else { checked = ""; }
	radioButton.replaceWith('<input type="checkbox" id="edit-field-budget-value-6" name="field_budget_value" value="6" class="form-radio" '+checked+'>');
	var radioButton = jQuery("div.form-type-radio input#edit-field-budget-value-7");	
	if(radioButton.attr("checked") != undefined) { checked = radioButton.attr("checked"); } else { checked = ""; }
	radioButton.replaceWith('<input type="checkbox" id="edit-field-budget-value-7" name="field_budget_value" value="7" class="form-radio" '+checked+'>');
	var radioButton = jQuery("div.form-type-radio input#edit-field-budget-value-8");	
	if(radioButton.attr("checked") != undefined) { checked = radioButton.attr("checked"); } else { checked = ""; }
	radioButton.replaceWith('<input type="checkbox" id="edit-field-budget-value-8" name="field_budget_value" value="8" class="form-radio" '+checked+'>');
	var radioButton = jQuery("div.form-type-radio input#edit-field-budget-value-9");	
	if(radioButton.attr("checked") != undefined) { checked = radioButton.attr("checked"); } else { checked = ""; }
	radioButton.replaceWith('<input type="checkbox" id="edit-field-budget-value-9" name="field_budget_value" value="9" class="form-radio" '+checked+'>');
});

// Chosen a few dropdowns on the Projects page (and elsewhere)
jQuery(document).ready(function(){
	jQuery("#header-items-per-page select").chosen();
	jQuery(".views-widget-filter-field_agency_tid select").chosen();
	jQuery(".views-widget-filter-field_municipality_by_psgc_tid select[name=select-region]").chosen({width: "100%"});
	jQuery(".views-widget-filter-field_municipality_by_psgc_tid select[name=select-province]").chosen({width: "100%"});
	jQuery(".views-widget-filter-field_municipality_by_psgc_tid select[name=select-municipality]").chosen({width: "100%"});
	jQuery(".views-widget-filter-field_region_tid select").chosen({width: "100%"});
	jQuery("select#edit-field-contact-person-project-tid").chosen({width: "300px"})
	jQuery(".contact-tables.switcher select").chosen();
});

// Contacts Page hide/show regional tables based on which region is selected 
jQuery(document).ready(function(){
	// First, hide all the tables 
	jQuery("div.contact-tables").hide();
	
	// Then show the switcher and the default Oversight Agency Table 
//	jQuery("div#contact-tables-oversight-agencies").show();
	jQuery("div.contact-tables.switcher").show();
	
	// On change of the select menu, get the one that's been selected and show it
	jQuery(".contact-tables.switcher select").change(function(){
		// Hide the active table, if it exists
		jQuery(".contact-tables.active").hide().removeClass("active");
		
		// Get the selected table and construct its class name
		var selectedTable = jQuery(".contact-tables.switcher select").val();
		var showClass = "contact-tables-"+selectedTable;
		
		// Show the selected table and add an "active" class to it
		jQuery("#"+showClass).fadeIn().addClass("active");
		
	});
});

// Enforcing maxlength on forward message field
jQuery(document).ready(function() {
    jQuery('textarea[maxlength]').keyup(function(){
        var max = parseInt(jQuery(this).attr('maxlength'));
        if(jQuery(this).val().length > max){
            jQuery(this).val(jQuery(this).val().substr(0, jQuery(this).attr('maxlength')));
        }

        jQuery(this).parent().find('.charsRemaining').html('You have ' + (max - jQuery(this).val().length) + ' characters remaining');
    });
});

// Predictive search on "search by municipality" on home page
jQuery(document).ready(function(){
	jQuery( "#municipality-province" ).autocomplete({
		source: "ajax/homepageform",
		minLength: 2
	});
	
	jQuery("#homepagesearch").submit(function(event){
		var formStatus = jQuery("#homepagesearch #status").val();
		console.log("not submitted"); 
		event.preventDefault();
		var municValue = jQuery("#municipality-province").val();
		console.log(municValue);
		jQuery.ajax({
			url: '/ajax/get_municipality_psgc_code?municipality='+municValue,
			success: function(data) {
				if(data.charAt(0) == "0") {
					data = data.substring(1);
				}
				window.location.href = "/projects?field_municipality_by_psgc_tid="+data;
			}			
		});
	})
})

// Add placeholder to general search bar at top of page 
jQuery(document).ready(function(){
	jQuery('.navbar-inner .search_box input[type=text]').attr("placeholder","Search Resources");
	
})

// In Map Page Popup, make multiple images slideshows 
jQuery(document).ready(function(){
	jQuery(".ip-geoloc-map").on('click','.arrows a.next.fresh', function(){
		jQuery(".ip-geoloc-map .arrows a").removeClass('fresh').addClass("unfresh");
		jQuery(".ip-geoloc-map ul#popup-slider li.first").css("display", "none");
		jQuery(".ip-geoloc-map ul#popup-slider li.first").next().addClass("active");
		jQuery(".ip-geoloc-map ul#popup-slider li.active").css("display", "block"); 
	});
	jQuery(".ip-geoloc-map").on('click','.arrows a.next.unfresh', function(){
		if(jQuery(".ip-geoloc-map ul#popup-slider li.active").hasClass("last")) {
			jQuery(".ip-geoloc-map ul#popup-slider li.first").addClass("new");
			jQuery(".ip-geoloc-map ul#popup-slider li.active").css("display","none").removeClass("active");
			jQuery(".ip-geoloc-map ul#popup-slider li.new").css("display","block").addClass("active").removeClass("new");
		} else {
			jQuery(".ip-geoloc-map ul#popup-slider li.active").next().addClass("new");
			jQuery(".ip-geoloc-map ul#popup-slider li.active").css("display","none").removeClass("active");
			jQuery(".ip-geoloc-map ul#popup-slider li.new").css("display","block").addClass("active").removeClass("new");
		}
	});
	jQuery(".ip-geoloc-map").on('click','.arrows a.prev.fresh', function(){
		jQuery(".ip-geoloc-map .arrows a").removeClass('fresh').addClass("unfresh");
		jQuery(".ip-geoloc-map ul#popup-slider li.first").css("display","none");
		jQuery(".ip-geoloc-map ul#popup-slider li.last").css("display","block").addClass("active");
	});
	jQuery(".ip-geoloc-map").on('click','.arrows a.prev.unfresh', function(){
		if(jQuery(".ip-geoloc-map ul#popup-slider li.active").hasClass("first")) {
			jQuery(".ip-geoloc-map ul#popup-slider li.last").addClass("new");
			jQuery(".ip-geoloc-map ul#popup-slider li.active").css("display","none").removeClass("active");
			jQuery(".ip-geoloc-map ul#popup-slider li.new").css("display","block").addClass("active").removeClass("new");
		} else {
			jQuery(".ip-geoloc-map ul#popup-slider li.active").prev().addClass("new");
			jQuery(".ip-geoloc-map ul#popup-slider li.active").css("display","none").removeClass("active");
			jQuery(".ip-geoloc-map ul#popup-slider li.new").css("display","block").addClass("active").removeClass("new");
		}
	});
	
	if(jQuery('.leaflet-popup-pane .project .left #popup-slider li.first').hasClass('last')) {
		jQuery('.leaflet-popup-pane .project .left .arrows').addClass('hi');
	}
	
});

//ADD COMMA TO THOUSANDS NUMBER


jQuery(document).ready(function(){
	if(jQuery('body').hasClass('page-map')) {
		function commaSeparateNumber(val){
	    while (/(\d+)(\d{3})/.test(val.toString())){
	      val = val.toString().replace(/(\d+)(\d{3})/, '$1'+','+'$2');
	    }
	    return val;
	  }
	
		var toReplace = jQuery('.comma').html();
		jQuery('.comma').html(commaSeparateNumber(toReplace));
	}
	
	//STATUS REPORT EXPAND / COLLAPSE
		
	jQuery('.view-status-reports-block .views-row-first .top').addClass('expanded');
	jQuery('.view-status-reports-block .views-row .top').click(function(){
		if(jQuery(this).hasClass('expanded')) {
			var expanded = jQuery(this).next('.bottom');
			jQuery(expanded).slideUp();
			jQuery(this).removeClass('expanded');
		}
		else {
			jQuery(this).addClass('expanded');
			var collapsed = jQuery(this).next('.bottom');
			jQuery(collapsed).slideDown();
		}
	});
	jQuery('.view-status-reports-block .views-row-first .top.expanded').click(function(){
		
	});
		
});
jQuery(document).ready(function(){
	jQuery('.views-field-field-municipality-name').on('click','a.close-button',function(){
		jQuery(this).parents("form").slideUp();
	});
})

jQuery(document).ready(function(){
	jQuery("#edit-field-contact-person-project-tid option:selected").removeAttr('selected').trigger("chosen:updated");
});

jQuery(document).ready(function () {
   if (document.location.pathname == '/contact') {
     jQuery(document).ajaxComplete(function(){
       jQuery("select").chosen();
     });
   }
});
