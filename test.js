// Select the container where you want to render the HTML
const contentDiv = document.getElementById('content');

// Create the HTML content as a string
const htmlContent = `
    <div class="page-wrapper chiller-theme toggled">
  <a id="show-sidebar" class="btn btn-sm btn-dark" href="#show-sidebar">
    <i class="fa fa-chevron-right"></i>
  </a>
  
  
  
  <nav id="sidebar" class="sidebar-wrapper">
    <div class="sidebar-content">
      <div class="sidebar-brand">
       <i class="fa fa-th"></i> 
        <a href="/cardbetav1/boardv4" style= "color: white; text-transform: lowercase;">stack board</a>
        
        <div id="close-sidebar">
          <i class="fa fa-times"></i>
        </div>
      </div>
      <div class="sidebar-header">
        <div class="user-pic">
  
          <img class="img-responsive img-rounded" src="https://pbs.twimg.com/profile_images/1237550450/mstom_400x400.jpg"
            alt="User picture">
               
        </div>
        <div class="user-info">
          <span class="user-name">Demo
            <strong>User</strong>
          </span>
          <span class="user-status">
        <i class="fa fa-circle"></i>  online</span>
          <span class="user-statu">
            <i class="fa fa-edit"></i>
            <span>Edit</span>
          </span>
        </div>
        </div>
     
  
      
      <div class="sidebar-menu">
        <ul>
          <li class="header-menu">
            <span>General</span>
          </li>
          <li class="sidebar-dropdown">
            <a href="#">
              <i class="fa fa-th"></i>
              <span>Stacks</span>
              
            </a>
           <!-- Sidebar Links Section -->
<div class="sidebar-submenu">
  <ul id="sidebarLinksContainer">
    <!-- Dynamically added links will appear here -->
  </ul>
</div>
            
          </li>
          <li class="sidebar-dropdown">
            <a href="#">
              <i class="far fa-square"></i>
              <span>Boards</span>
              
            </a>
            <div class="sidebar-submenu">
              <ul>
                
                <li>
                  <a href="#" data-toggle="modal" data-target="#board">+ New board</a>
                </li>
              </ul>
            </div>
          </li>
          <li class="sidebar-dropdown">
            <a href="#">
              <i class="fas fa-tasks"></i>
              <span>Projects</span>
            </a>
            <div class="sidebar-submenu">
              <ul>
                <li>
                  <a href="/cardbetav1/projects2">+ New project</a>
                </li>
               
                
              </ul>
            </div>
          </li>
          <li class="sidebar-dropdown">
            <a href="#">
              <i class="fas fa-users"></i>
              <span>Team</span>
            </a>
            <div class="sidebar-submenu">
              <ul>
                <li>
                  <a href="#" data-toggle="modal" data-target="#team">Create a team</a>
                </li>
                <li>
                  <a href="#" data-toggle="modal" data-target="#team">Join a team</a>
                </li>
                
                <li>
                  <a href="#" data-toggle="modal" data-target="#team">Send invites</a>
                </li>
              </ul>
            </div>
          </li>
         <li>
            <a href="/cardbetav1/addcard">
              <i class="fa fa-fire"></i>
              <span>Discover</span>
            </a>
           
          </li>
          <li class="header-menu">
            <span>More</span>
          </li>
          <li>
            <a href="#">
              <i class="fa fa-wrench"></i>
              <span>Tools</span>
              <span class="badge badge-pill badge-primary">Beta</span>
            </a>
          </li>
          <li>
            <a href="#" data-toggle="modal" data-target="#settings" data-toggle="tooltip" data-placement="top" title="Ctrl+Shift+S">
              <i class="fa fa-cog"></i>
              <span>Settings</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fa fa-share-alt"></i>
              <span>Share</span>
            </a>
          </li>
        </ul>
      </div>
      <!-- sidebar-menu  -->
    </div>
   
    <!-- sidebar-content  -->
    <div class="sidebar-footer">
    <a href="#"><i class="fa fa-users"></i> Create a team </a>
    
    </div>
    
  </nav>
  
                 
    
    
    
    
    
    
    
    
    
    
    <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
  <a class="navbar-brand" href="#">
  
 
  <h3><i class="fa fa-th"></i> stack board</h3></a>
  


  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
    <ul class="navbar-nav">
      <li class="nav-item">
  
       <li class="nav-item">
        <a  class="nav-link btn btn-sm btn-primary text-white" style="margin-right: 20px;" role="button" href="/chatapp"><i class="fa fa-users"></i> Connect</a>
        
        
    
      </li>
      
      
       <a class="nav-link" href="#" data-toggle="dropdown"><i class="fa fa-bell"></i><span class="badge badge-danger"> 3</span></a>

     
    <div class="dropdown">
    <div class="dropdown-menu" style="right:0; left: auto; font-size:12px;">
    
    
    
   
    
    
    <a class="dropdown-item" style="color:; font-size:20px;" data-toggle="modal" href="#createaccount"><i class="fa fa-bell"></i> Alert center</a>
      
      <hr>
    
    
    
    
      <a class="dropdown-item" data-toggle="modal" href="#accountinfo">
     
      <img class="lib-img-show" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1200px-Google_%22G%22_logo.svg.png" alt="HTML tutorial" style="width:25px;height:25px; margin-right: 10px;"> <strong>Welcome to stack board!</strong>
      <br>
      Thank you for trying stack board! <br>Take and tour and find out...</a>
     
     
     <hr>
    
    
    
    
      <a class="dropdown-item" data-toggle="modal" href="#accountinfo">
     
      <img class="lib-img-show" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1200px-Google_%22G%22_logo.svg.png" alt="HTML tutorial" style="width:25px;height:25px; margin-right: 10px;"> <strong>Welcome to stack board!</strong>
      <br>
      Thank you for trying stack board!<br> Take and tour and find out...</a>
     
     
     
     
     <hr>
    
    
    
    
      <a class="dropdown-item" data-toggle="modal" href="#accountinfo">
     
      <img class="lib-img-show" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1200px-Google_%22G%22_logo.svg.png" alt="HTML tutorial" style="width:25px;height:25px; margin-right: 10px;"> <strong>Welcome to stack board!</strong>
      <br>
      Thank you for trying stack board!<br> Take and tour and find out...</a>
      
      
       <hr>
      <center><a class="dropdown-item" style="color:blue;" data-toggle="modal" href="#createaccount">View all alerts</a></center>
    </div>
</div>
      
      </li>
      
    
        
        
      
      <li class="nav-item">
        <a class="nav-link" href="#" data-toggle="modal" data-target="#team">Log in</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#" data-toggle="modal" data-target="#team">Sign up</a>
      </li>    
    </ul>
  </div>  
</nav>
      
    <main class="page-content">
    <div class="container-fluid">
  
      <div class="protected content bg-indigo">

	  <main role="main">

	    <div class="container">
    
   
  
        
   
	



 
<div id="noSectionsPlaceholder" class="text-center" style="display: none; margin-top: 100px; margin-bottom: 100px;">
	<h4>Welcome to your board!</h4>
	<br>
	<h5>Your board manages your stacks, like (marketing, social media, development, etc.)</h5><br><br>
  Please name and create a stack to get started. (you can always rename or delete later)
	
	<br><br><button type="button" class="btn btn-success" data-toggle="modal" data-target="#addsection">
  Create a stack
</button>
</div>


 

<div id="stickyButtonsContainer" class="button-container"></div>

  
  
 
  
  <div id="noCardsPlaceholder" class="alert  text-center" style="display: none;">
  Search stacks


   
  <!-- Filter Input -->
<input id="filterInput" type="text" class="form-control" placeholder="Type / to search... ">
</div>
<!-- No Results Message -->
<div id="noResultsMessage" class="alert alert-warning d-none">No results found.</div>

<!-- Filtered Cards Container -->
<div id="searchResultsContainer" class="row d-none">
</div>


<div class="container mt-4">
  <div class="row align-items-center"> 
    <div class="col"> 
      <h2 class="mb-4">Board 1</h2>
      
    </div>
    <div class="col-auto"> 
      <button type="button" class="btn btn-success" data-toggle="modal" data-target="#addsection">
        New stack
      </button>
     
    </div>
  </div>
</div>
<div id="sectionsContainer">
      <!-- Dynamic sections and cards will load here -->
    </div>
      
          
             <div id="popUpSidebar" class="sidebar">
   
          
         
  <div id="sidebarButtonsContainer"></div>
          <div class="side" style="position: fixed; right:30px;
                                   bottom: 40px;">
            <center><a href="#" data-toggle="modal" data-target="#help"><i class="fas fa-question-circle fa-lg"></i></a></center>
            <br>
            <p>Go back: <strong>ALT + </strong><i class="fas fa-arrow-left"></i></p>
            
          </div>
</div>
          
      <!-- Shortcut Builder Modal -->
<div id="shortcutModal" class="modal fade" tabindex="-1" style="z-index: 9999;">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Set Keyboard Shortcut</h5>
        <button type="button" class="close" data-dismiss="modal">&times;</button>
      </div>
      <div class="modal-body">
        <p>Select modifier keys and press any key to set the shortcut.</p>
        <div class="modifier-keys mb-3">
          <button class="btn btn-outline-secondary" data-key="Ctrl">Ctrl</button>
          <button class="btn btn-outline-secondary" data-key="Alt">Alt</button>
          <button class="btn btn-outline-secondary" data-key="Shift">Shift</button>
          <button class="btn btn-outline-secondary" data-key="Meta">Meta (Cmd)</button>
        </div>
        <div class="shortcut-preview mb-3">
          <strong>Current Shortcut:</strong> <span id="currentShortcutDisplay"></span>
          <button class="btn btn-sm btn-outline-primary ml-2" id="editShortcut">Edit</button>
        </div>
        <div class="shortcut-preview mb-3">
          <strong>New Shortcut:</strong> <span id="shortcutDisplay"></span>
        </div>
        <div class="alert alert-danger" id="shortcutConflictAlert" style="display: none;">
          This shortcut is already in use by the button: <strong id="conflictingButtonName"></strong>.
          <div class="mt-2">
            <button type="button" class="btn btn-danger btn-sm" id="confirmOverride">Yes, Override</button>
            <button type="button" class="btn btn-secondary btn-sm" id="cancelOverride">Cancel</button>
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
        <button type="button" class="btn btn-primary" id="saveShortcut">Save</button>
      </div>
    </div>
  </div>
</div>      
          
          
          
          
          
          
          
          
  <!-- settings modal -->

<div class="modal fade" id="settings" tabindex="-1" role="dialog" aria-labelledby="settingsLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="settingsLabel">Settings</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <p style="margin-bottom: 50px; margin-left: 130px;">Access settings (Ctrl+Shift+S)</p>
        
        
        <div class="custom-control custom-switch">
  <input type="checkbox" class="custom-control-input" id="settingsFullscreenToggle">
  <label class="custom-control-label" for="settingsFullscreenToggle">
    <strong>Enable sidebar Fullscreen Mode</strong>
    <br>(All windows opened from the sidebar will open in fullscreen)
  </label>
</div>

 <div class="custom-control custom-switch">
  <input type="checkbox" class="custom-control-input" id="windowBehaviorToggle">
  <label class="custom-control-label" for="windowBehaviorToggle">
    <strong>Refocus Existing Windows</strong>
    <br>(Existing trackable windows will be brought to front instead of opening new windows)
  </label>
</div>
        
    <div class="custom-control custom-switch">
  <input type="checkbox" class="custom-control-input" id="shortcutBehaviorToggle">
  <label class="custom-control-label" for="shortcutBehaviorToggle">
    <strong>Refocus Existing Windows for Shortcuts</strong>
    <br>(When using shortcuts, existing trackable windows will be brought back up instead of opening new windows)
  </label>
</div>   
        
        <div class="custom-control custom-switch">
  <input type="checkbox" class="custom-control-input" id="autoCloseWindowsToggle">
  <label class="custom-control-label" for="autoCloseWindowsToggle">
    <strong>Auto-close windows when modal is closed</strong>
    <br>(Close all attached windows opened from a card whenever the card is closed)
    <br>
    <button id="clearShortcutsBtn" class="btn btn-warning">Clear All Shortcuts</button>

  </label>
</div>

        
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
        <button type="button" class="btn btn-primary" data-dismiss="modal" >Save changes</button>
      </div>
    </div>
  </div>
          </div>    
          
          
          
          
          
          
          
    <!-- Account Info Modal -->
  <div class="modal fade" id="addsection" tabindex="-1" role="dialog" aria-labelledby="accountinfoLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="accountinfoLabel">Create a new stack</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <!-- Add Section Form -->
    <div class="my-4">
      <input type="text" id="sectionTitle" class="form-control" placeholder="Name of stack">
      <button id="addSectionBtn" class="btn btn-success mt-2" data-dismiss="modal">Add Stack</button>
    </div>
 
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
    
    
    
    <!-- help modal -->

<div class="modal fade" id="help" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="myModalLabel">Help</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        Buttons in yellow cannot be tracked
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        
      </div>
    </div>
  </div>
</div>
          
          <!-- projects modal -->

<div class="modal fade" id="team" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="myModalLabel">Team</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        Team features are not active in this demo
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        
      </div>
    </div>
  </div>
</div>
          
          
 <!-- new boards -->

<div class="modal fade" id="board" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="myModalLabel">Create new board</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        Multiple boards are not supported in this demo
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        
      </div>
    </div>
  </div>
</div>         
    
    
    
    



  <!-- Account Info Modal -->
  <div class="modal fade" id="accountinfo" tabindex="-1" role="dialog" aria-labelledby="accountinfoLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="accountinfoLabel">Account Info</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <!-- Dynamic content will be inserted here -->
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
<!-- The Modal -->
  <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="modalTitle" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">

        <!-- Modal Header -->
       <div class="modal-header d-flex align-items-center">
  <img id="modalImage" src="" alt="Card Image" class="rounded-circle mr-2" style="width: 40px; height: 40px; display: none;">
  <h4 class="modal-title mb-0" id="modalTitle">Title</h4>
          
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>

        <!-- Modal Body -->
        <div class="modal-body" id="modalBody">
          <!-- Dynamically added buttons will appear here -->
          <div id="launch-buttons" class="mb-3">
            <!-- Buttons content will go here -->
          </div>

          

          <!-- Add/Edit Button Form -->
          <button id="toggleFormButton" class="btn btn-success" data-toggle="collapse" data-target="#addEditButton">Add button</button>
          <div id="addEditButton" class="collapse mt-3">
            <form id="newButtonForm">
              <div class="form-group">
                <label for="buttonURL">Button URL:</label>
                <input type="url" class="form-control" id="buttonURL" required>
              </div>
              <div class="form-group">
                <label for="buttonName">Button Name:</label>
                <input type="text" class="form-control" id="buttonName" required>
              </div>
              <button type="submit" id="saveButton" class="btn btn-primary"><i class="fas fa-plus"></i> Add</button>
              <button type="button" class="btn btn-secondary" data-toggle="collapse" data-target="#linksettings"><i class="fas fa-cog"></i> Settings</button>
              <div id="linksettings" class="collapse">
                <br>
                <h5>Control how links are opened</h5>
               
              <div class="form-group">
                <label>Open Link in:</label><br>
                
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="openType" id="openNewWindow" value="newWindow" checked>
                  <label class="form-check-label" for="openNewWindow">New Window</label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="openType" id="openNewTab" value="newTab">
                  <label class="form-check-label" for="openNewTab">New Tab</label>
                </div>
            
              </div>
              <div id="windowSizeOptions" style="display:none;">
                <div class="form-group">
                  <label>New window Size:</label><br>
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="windowSize" id="sizeSmall" value="small">
                    <label class="form-check-label" for="sizeSmall">Small (600x400)</label>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="windowSize" id="sizeMedium" value="medium">
                    <label class="form-check-label" for="sizeMedium">Medium</label>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="windowSize" id="sizeLarge" value="large" checked>
                    <label class="form-check-label" for="sizeLarge">Large</label>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="windowSize" id="sizeFull" value="full">
                    <label class="form-check-label" for="sizeFull">Full Screen</label>
                  </div>
                </div>
              </div>
              <div class="form-group">
                <button type="submit" data-target="#linksettings" data-toggle="collapse" id="saveButton" class="btn btn-primary">Apply settings</button>
                <button type="button" data-target="#linksettings" data-toggle="collapse" id="cancelButton" class="btn btn-secondary">Cancel</button>
              </div>
            </form>
          </div>
        </div>
        </div>

        <!-- Modal Footer -->
        <div class="modal-footer">
         <button type="button" class="btn btn-primary" id="stickToTop">Stick to Top</button>
          <button type="button" id="closeWindowButton" class="btn btn-danger" data-dismiss="modal">Close</button>

        </div>

      </div>
    </div>
  </div>
</div>

<!-- Rename Section Modal -->
<div class="modal fade" id="renameModal" tabindex="-1" aria-labelledby="renameModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="renameModalLabel">Rename Stack</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <input type="text" id="renameInput" class="form-control" placeholder="Enter new section name">
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
        <button type="button" class="btn btn-primary" id="saveRenameBtn"  data-dismiss="modal">Save</button>
      </div>
    </div>
  </div>
</div> 
</div>
		

    </main>
	<!-- footer start -->
    <footer class="bg-dark text-light py-5 mt-5">
                <div class="container">
                    <div class="row">
                        <div class="col-12 col-md-3">
                            <h3 class="mb-0"><i class="fas fa-th"></i> Stackboard</h3>
           
                        </div>
                        <!--end of col-->
                        <div class="col-12 col-md-9">
                            
                            <div class="row no-gutters">
                                <div class="col-6 col-lg-3">
                                     <h5>Features</h5>
                                    <ul class="list-unstyled">
                                        <li>
                                            <a href="#" class="text-muted">App management</a>
                                        </li>
                                        <li>
                                            <a href="#" class="text-muted">Project management</a>
                                        </li>
                                        <li>
                                            <a href="#" class="text-muted">Collaboration</a>
                                        </li>
                                        <li>
                                            <a href="#" class="text-muted">Smart goals</a>
                                        </li>
                                    </ul>
                                </div>
                                <!--end of col-->
                                <div class="col-6 col-lg-3">
                                    <h5>Resources</h5>
                                    <ul class="list-unstyled">
                                        <li>
                                            <a href="#" class="text-muted">Media kit</a>
                                        </li>
                                        <li>
                                            <a href="#" class="text-muted">Documentation</a>
                                        </li>
                                        <li>
                                            <a href="#" class="text-muted">Status & uptime</a>
                                        </li>
                                        <li>
                                            <a href="#" class="text-muted">Pitch deck</a>
                                        </li>
                                    </ul>
                                </div>
                                <!--end of col-->
                             
                                <div class="col-6 col-lg-3">
                                     <h5>Help</h5>
                                    <ul class="list-unstyled">
                                        <li>
                                            <a href="#" class="text-muted">Knowledgebase</a>
                                        </li>
                                        <li>
                                            <a href="#" class="text-muted">FAQ</a>
                                        </li>
                                        <li>
                                            <a href="#" class="text-muted">Change log</a>
                                        </li>
                                        <li>
                                            <a href="#" class="text-muted">Report issue</a>
                                        </li>
                                          <li>
                                            <a href="#" class="text-muted">Feature request</a>
                                        </li>
                                          <li>
                                            <a href="#" class="text-muted">Site map</a>
                                        </li>
                                    </ul>
                                </div>
                                <!--end of col-->
                                <div class="col-6 col-lg-3">
                                    <h5>About</h5>
                                    <ul class="list-unstyled">
                                        <li>
                                            <a href="#" class="text-muted">Team</a>
                                        </li>
                                        <li>
                                            <a href="#" class="text-muted">Company</a>
                                        </li>
                                        <li>
                                            <a href="#" class="text-muted">Blog</a>
                                        </li>
                                        <li>
                                            <a href="#" class="text-muted">Contact</a>
                                        </li>
                                    </ul>
                                    
     
     
                                    
                                    
                                </div>
                                <!--end of col-->
                            </div>
                            <!--end of row-->
                        </div>
                        <!--end of col-->
                    </div>
                    <!--end of row--><hr>
                     <div class="col-6 col-sm-12">
                    <small class="d-block text-muted">Copyright © 2025 stackboard technologies, a dymond company. All Rights Reserved.</small>
                            <small class="text-muted"><a href="#">Terms of Use</a> |
<a href="#">Privacy & Cookie Policy</a> </small></div>
                    
                   
                   <div class="footer-buttons text-right">
                   
                   
                    <i class="fab fa-github fa-xl"></i>
     <i class="fa-brands fa-discord fa-xl"></i>
  <i class="fa-brands fa-x-twitter fa-xl"></i>
  <i class="fa-brands fa-youtube fa-xl"></i>
  <i class="fa-brands fa-reddit-alien fa-xl"></i>
  </div></div>
           
                <!--end of container-->
            </footer>
`;

// Render the HTML content inside the container
contentDiv.innerHTML = htmlContent;
