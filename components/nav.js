app.component("nav-bar", {
    template: `
    <nav>
        <h2 class="text-2xl logo"><a href="#">Portfo<span>lio</span></a></h2>
        <a href="#" class="toggle-button" @click="toggle" >
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
          </a>
          <div v-if="show" class="navbar-links">
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Skills</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>
        <a href="#" class="btn-rgb"><span>contact</span></a>
    </nav>
    `,
    data() {
        return {
            show: true,
        }
    },
    methods: {
        toggle() {

            console.log("done")
        }
    }
})