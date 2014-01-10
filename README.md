#Listify

A jQuery plugin that binds two separate lists in a parent to child relationship. A simple example would be having a list of websites you have built and a list of the tools you used to build them. Listify allows you to add interactivity between the lists in two forms -- appending the children underneath the parent on hover ( append ) or hiding all but the children on hover ( toggle ).

##Example
Check out examples/index.html

-or go to-

[jonkuperman.com/listify](http://jonkuperman.com/listify)

##Installation

###Requirements
jQuery version 1.5 or later.

###Download

Just download the listify.js file and link to it in your project. If you'd like a live example, just clone the entire repo:

    git clone git@github.com:m1ck3y/listify.git
    cd ./listify

and open examples/index.html in your browser.

##Usage

First, make the list of parent items:

    <ul id="example">
        <li data-tools='["PHP","Git","CodeIgniter"]'>My First Project</li>
        <li data-tools='["JavaScript","Ruby","Git"]'>My Second Project</li>
        <li data-tools='["PHP","JavaScript","Laravel"]'>My Third Project</li>
    </ul>

Next, make the list of child items:

    <ul class="tools">
        <li data-tool="Ruby">Ruby</li>
        <li data-tool="Git">Git</li>
        <li data-tool="PHP">PHP</li>
        <li data-tool="JavaScript">JavaScript</li>
        <li data-tool="CodeIgniter">CodeIgniter</li>
        <li data-tool="Laravel">Laravel</li>
    </ul>

Last, to get listify working for your project, just link to the listify.js file and then:

    //use listify with defaults ( append mode )
    $('#your-parent-list-id').listify();

    //customize effect and data attribute
    $('#your-parent-list-id').listify({ effect: 'toggle', attribute: 'tool' });