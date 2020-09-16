const Header = () => {
  const view = `

   
      
       
    
         <div class="header-nav header-main ">
      <nav class="navbar navbar-light ">
       <img class='logo-rick' src="/src/images/rickandmorty.png">
        <form class="form-inline  ">
         <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
         <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </nav>
  <div/>
  
      
    
  `;
  return view;
};
export default Header;
