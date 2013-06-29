$(function(){

        $.ui.dynatree.nodedatadefaults["icon"] = false;

        var nodeName = "";

        $("#tree").dynatree({
            onActivate: function(node) {
                $('#doc-info').html("<p>" + node.data.title + " documentation here.</p>");
            },
            persist: true,
            minExpandLevel: 2,
            dnd: {
                    onDragStart: function(node) {
                        logMsg("tree.onDragStart(%o)", node);
                        if(node.data.isFolder)
                            return false;
                        return true;
                    },
                    onDragStop: function(node) {
                        logMsg("tree.onDragStop(%o)", node);
                        nodeName = node.data.title;
                    }
            },
            children: [ // Pass an array of nodes.
                {title: "Virtual Relations", isFolder: true,
                    children: [
                        {title: "Hotels", isFolder: true, expand: true, icon: null, addClass: "custom1", children: [
                            {title: "Hotels-url"},
                            {title: "Hotels-rating"},
                            {title: "Hotels-area"},
                            {title: "Hotels-price"}
                        ]},
                        {title: "Shows", isFolder: true, expand: true, icon: null, addClass: "custom2", children: [
                            {title: "Show-category"},
                            {title: "Show-name"},
                            {title: "Show-url"},
                            {title: "Show-location"},
                            {title: "Show-date"},
                            {title: "Show-price"}
                        ]},
                        {title: "Events", isFolder: true, expand: true, icon: null, addClass: "custom3", children: [
                            {title: "Aceticket-artist"}
                        ]},
                        {title: "Houses", isFolder: true, expand: true, icon: null, addClass: "custom4", children: [
                            {title: "Zillow-homes"},
                            {title: "Zillow-openhouse"}
                        ]},
                        {title: "Location", isFolder: true, expand: true, icon: null, addClass: "custom5", children: [
                            {title: "Webgis"},
                            {title: "Geodistance"},
                            {title: "Yellowpages"},
                            {title: "Yelp"}
                        ]},
                        {title: "Business", isFolder: true, expand: true, icon: null, addClass: "custom6", children: [
                            {title: "Techcrunch-search"},
                            {title: "Crunchbase-search"},
                            {title: "Crunchbase-company"},
                            {title: "Crunchbase-person"},
                            {title: "Crunchbase-product"},
                            {title: "Crunchbase-company-nemployees"},
                            {title: "Crunchbase-company-category"},
                            {title: "Crunchbase-company-product"},
                            {title: "Crunchbase-company-person"}
                        ]},
                        {title: "Finance", isFolder: true, expand: true, icon: null, addClass: "custom7", children: [
                            {title: "Stock-quote-history"},
                            {title: "Inflation"},
                            {title: "Currency"},
                            {title: "Currency-convert"}
                        ]},
                        {title: "Travel", isFolder: true, expand: true, icon: null, addClass: "custom8", children: [
                            {title: "Airline"},
                            {title: "Airport"},
                            {title: "Amtrak-station"},
                            {title: "Atlasttours"},
                            {title: "Atlasttoursdate"},
                            {title: "Expedia-car"},
                            {title: "Expedia-air"},
                            {title: "Expedia-hotel"},
                            {title: "Swa-schedule"},
                            {title: "Greyhound-schedule"},
                            {title: "Amtrak-schedule"}
                        ]},
                        {title: "Arithmetic", isFolder: true, expand: true, icon: null, addClass: "custom9", children: [
                            {title: "="},
                            {title: ">"},
                            {title: "<"},
                            {title: ">="},
                            {title: "<="},
                            {title: "+"},
                            {title: "*"},
                            {title: "/"},
                            {title: "Integer-in-range"}
                        ]},
                        {title: "Time", isFolder: true, expand: true, icon: null, addClass: "custom10", children: [
                            {title: "Universaltime"},
                            {title: "Current-ut"},
                            {title: "Current-date"},
                            {title: "Current-time"},
                            {title: "Date-diff"},
                            {title: "Time-diff"}
                        ]},
                        {title: "Text/Parsing", isFolder: true, icon: null, addClass: "custom11", children: [
                            {title: "Parse2ints"},
                            {title: "Parse3ints"},
                            {title: "Split2"},
                            {title: "Int-list-string="},
                            {title: "String-equal"},
                            {title: "String-greaterp"},
                            {title: "String-contains"},
                            {title: "String="}
                        ]},
                        {title: "Worldbank", isFolder: true, expand: true, icon: null, addClass: "custom12", children: [
                            {title: "Worldbank-indicator"},
                            {title: "Worldbank-data"}
                        ]}
                    ]
                }
            ]
        });

        $('#searchnav a').on('click', function(){
            $('.content-link-active').removeClass('content-link-active');
            $(this).addClass('content-link-active');
            $('.content-box-active').removeClass('content-box-active');
            var index = $(this).parent('li').index();
            $('#searchcontainer > div').eq(index).addClass('content-box-active');
        });
        
        var index = $('#col-table tr').children('td').length;
        for (var i = 0; i < index; i++) {
            $('#col-search').append("<div class='col-search-item'>" + $('#col-table td').eq(i).text() + "</div>");
        }

        $("#editSearch").droppable({
            hoverClass: "drophover",
            addClasses: true,
            over: function(event, ui) {
                logMsg("droppable.over, %o, %o", event, ui);
            },
            drop: function(event, ui) {
                $(this).append("<div class='rowcontainer'><div class='column'><label>Column 1</label><textarea></textarea><button type='submit'>Submit</button></div><div class='column'><label>Column 2</label><textarea></textarea><button type='submit'>Submit</button></div><div class='column'><label>Column 3</label><textarea></textarea><button>Submit</button></div></div>");
            }
        });

        $('#clear').on('click', function(){
            $('#editSearch').html("");
            $('#doc-info').html("");
            $('#query-desc').html("");
            $('#searchProgress').html("");
            $('#col-table').html("");
            $('#col-search').html("");
        });

        $('#col-table input').prop('checked', true);

        $('#col-search').sortable({axis: "x"});
        $('#col-search').disableSelection();
        $('#editSearch').disableSelection();
});