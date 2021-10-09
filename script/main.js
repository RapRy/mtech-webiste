$(() => {
  class Navigation {
    constructor() {
      this.menuToggle = false;
      this.menuData = [
        { title: "Home", slug: "home", sub: null },
        {
          title: "About",
          slug: "about",
          sub: [
            { title: "Mission", slug: "mission" },
            { title: "Vision", slug: "vision" },
            { title: "Core Values", slug: "core+values" },
            { title: "Teams", slug: "teams" },
          ],
        },
        { title: "Services", slug: "services", sub: null },
        { title: "Partners", slug: "partners", sub: null },
        { title: "Careers", slug: "careers", sub: null },
        { title: "Contact", slug: "contact", sub: null },
      ];
      this.baseUrl = "index.html";
    }

    toggleMainSideMenu = () => {
      if (!this.menuToggle) {
        $(".main-sidemenu-container").css({ display: "block" });
        $(".main-sidemenu").animate(
          { right: 0 },
          { duration: 300, easing: "swing" }
        );
        this.menuToggle = true;
        return;
      }

      if (this.menuToggle) {
        $(".main-sidemenu").animate(
          { right: "-270px" },
          {
            duration: 300,
            easing: "swing",
            complete: () => {
              $(".main-sidemenu-container").css({ display: "none" });
            },
          }
        );
        this.menuToggle = false;
        return;
      }
    };

    menuCickEvent = () => {
      $(".menu-burger").on("click", this.toggleMainSideMenu);
      $(".main-mobile-close i").on("click", this.toggleMainSideMenu);
    };

    loadEvents = () => {
      this.menuData.forEach((data, ind) => {
        $(".main-mobile-sidemenu").append(`
          <div class="menu-mobile-link-container">
            <a class="menu-mobile-link" href="${this.baseUrl}#${data.slug}">${data.title}</a>
          </div>
        `);

        if (data.sub !== null) {
          data.sub.forEach((subData) => {
            $(".menu-mobile-link-container").eq(ind).append(`
              <div class="submenu-mobile-link-container">
                <a class="submenu-mobile-link" href="${this.baseUrl}#${subData.slug}">${subData.title}</a>
              </div>
            `);
          });
        }
      });
    };
  }

  class Services {
    constructor() {
      this.servicesData = [
        {
          title: "Mobile Service Provider",
          slug: "mobile-service-provider",
          description:
            "We manage to increase our revenue by expanding our business to Thailand, Vietnam, Philippines, Malaysia, Serbia, Kenya, Czech, and Netherland, as well as through partnerships.",
          icon: "fa-mobile-alt",
        },
        {
          title: "Consultancy",
          slug: "consultancy",
          description:
            "Collaborate with Huawei and provide modules for training Provide service and supply extensive product range for major industries in Brunei. Also for O&G and Petrochemical Co.",
          icon: "fa-user-tie",
        },
        {
          title: "SMS Platforms",
          slug: "sms-platforms",
          description:
            "Mobitech Solutions is also able to aid in infotainment suites, SMS platforms and messaging services. We have value added services specifically for Java and Smart phones.",
          icon: "fa-sms",
        },
        {
          title: "OTT/VAS",
          slug: "ott-vas",
          description:
            "Games via APK and IAP, rich media content, IAP meter reading and many more.",
          icon: "fa-chess",
        },
        {
          title: "Oil & Gas Trading",
          slug: "oil-gas-trading",
          description:
            "We are expanding our services to suit increasing needs of oil, gas and petrochemical companies. Our range of products as well as our extensive, global network make us a reliable choice for supplies.",
          icon: "fa-gas-pump",
        },
        {
          title: "Technical Training",
          slug: "technical-training",
          description:
            "FTTH Training and Networking, Hands on Training such as Plumbing, Vehicle Repair, Air Conditioning and many more.",
          icon: "fa-chalkboard-teacher",
        },
      ];
    }

    lpLoadEvents = () => {
      this.servicesData.forEach((service, i) => {
        $("#services-list").append(`
          <div class="service-card glide__slide">
            <i class="fas ${service.icon}"></i>
            <div class="service-card-details">
              <h4>${service.title}</h4>
              <p>${service.description}</p>
            </div>
          </div>
        `);

        $("#services-bullets").append(`
        <button class="glide__bullet service-bullet" data-glide-dir="=${i}"></button>
        `);
      });

      new Glide(".glide-service", {
        peek: { before: 0, after: 60 },
        gap: 20,
        animationDuration: 300,
        rewind: false,
      }).mount();
    };
  }

  class About {
    constructor() {
      this.lpData = [
        {
          title: "Work with Heart",
          description:
            "Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in.",
          icon: "fa-hand-holding-heart",
        },
        {
          title: "Reliable Service",
          description:
            "Donec vitae sapien ut libero venenatis faucibu. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt, ut libero venenatis faucibu.",
          icon: "fa-users-cog",
        },
        {
          title: "Great Support",
          description:
            "Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in.",
          icon: "fa-headset",
        },
      ];
      this.lpTeamData = [
        {
          name: "Muhd Abdul Rahman",
          avatar:
            "https://www.clipartmax.com/png/middle/69-697178_male-avatar-avatar-male.png",
          position: "CEO / Proprietor",
          description: `An experienced and Brunei‘s long-running Mobile services and IT platform solutions provider. He serves as the CEO / Proprietor of Mobitech Solution Company.
        `,
        },
        {
          name: "Jho Dy",
          position: "Business Development Manager",
          avatar:
            "https://www.clipartmax.com/png/middle/21-214382_female-clipart-transparent-female-avatar.png",
          description: `Jho Dy, serves as Business Development Manager responsible for expanding business both Local and International Markets.
        `,
        },
        {
          name: "Sophie",
          position: "Operations & Business Development",
          avatar:
            "https://www.clipartmax.com/png/middle/21-214382_female-clipart-transparent-female-avatar.png",
          description: `Sophie is responsible for International Business operations. She’s Exploring, identifying and evaluating potential partners/gateways/affiliates to penetrate and develop new markets. Maintaining close business relations with existing and potential partners, negotiating revenue share, closing contracts, establish connectivity, handling licenses, advertisement etc.
        `,
        },
        {
          name: `Mr. Khedir`,
          avatar:
            "https://www.clipartmax.com/png/middle/69-697178_male-avatar-avatar-male.png",
          position: "Operation & Business Development Freelancer",
          description: `Khedir serves as an Operation & Business Development Freelancer .
        `,
        },
      ];
    }

    lpLoadEvents = () => {
      this.lpData.forEach((data) => {
        $(".whoweare-others-container").append(`
            <div class="whoweare-other">
              <i class="fas ${data.icon}"></i>
              <div class="whoweare-other-details">
                <h4>${data.title}</h4>
                <p>${data.description}</p>
              </div>
            </div>
        `);
      });

      this.lpTeamData.forEach((data, i) => {
        $("#team-list").append(`
          <div class="team-member glide__slide">
            <div class="team-photo-container">
              <img src="${data.avatar}" alt="${data.name}" />
            </div>
            <h4>${data.name}</h4>
            <p>${data.position}</p>
          </div>
        `);

        $("#team-bullets").append(`
        <button class="glide__bullet team-bullet" data-glide-dir="=${i}"></button>
        `);
      });

      new Glide(".glide-team", {
        peek: { before: 0, after: 60 },
        gap: 20,
        animationDuration: 300,
        rewind: false,
      }).mount();
    };
  }

  class Window {
    constructor() {
      this.animDuration = 800;
      this.windowHeight = $(window).height();
      this.heroContainer = $(".hero-container");
      this.servicesContainer = $(".services-container");
      this.whoweareContainer = $(".whoweare-container");
    }

    homeAnimEvent = (scrollVal) => {
      if (this.heroContainer.offset().top === 0) {
        this.heroContainer
          .find("h1")
          .animate({ left: 0, opacity: 1 }, this.animDuration);
        this.heroContainer
          .find("p")
          .delay(100)
          .animate({ left: 0, opacity: 1 }, this.animDuration);
        this.heroContainer
          .find("a")
          .delay(300)
          .animate({ left: 0, opacity: 1 }, this.animDuration);
      }

      if (this.windowHeight > this.servicesContainer.offset().top) {
        let cardDelay = 200;
        this.servicesContainer
          .find("h3")
          .animate({ left: 0, opacity: 1 }, this.animDuration);

        this.servicesContainer.find(".service-card").each((i, card) => {
          $(card)
            .delay(cardDelay)
            .animate({ top: 0, opacity: 1 }, this.animDuration);

          cardDelay += 200;
        });

        this.servicesContainer
          .find(".services-controls-container")
          .animate({ opacity: 1 }, this.animDuration);
      } else if (scrollVal > this.servicesContainer.offset().top / 2) {
        let cardDelay = 200;
        this.servicesContainer
          .find("h3")
          .animate({ left: 0, opacity: 1 }, this.animDuration);

        this.servicesContainer.find(".service-card").each((i, card) => {
          $(card)
            .delay(cardDelay)
            .animate({ top: 0, opacity: 1 }, this.animDuration);

          cardDelay += 200;
        });

        this.servicesContainer
          .find(".services-controls-container")
          .animate({ opacity: 1 }, this.animDuration);
      }

      if (scrollVal > this.whoweareContainer.offset().top) {
        this.whoweareContainer
          .find("h3")
          .animate({ left: 0, opacity: 1 }, this.animDuration);

        this.whoweareContainer
          .find(".whoweare-intro-container")
          .delay(100)
          .animate({ left: 0, opacity: 1 }, this.animDuration);
      } else if (
        scrollVal >
        this.whoweareContainer.prev().innerHeight() / 2 +
          this.whoweareContainer.offset().top -
          this.whoweareContainer.prev().innerHeight()
      ) {
        this.whoweareContainer
          .find("h3")
          .animate({ left: 0, opacity: 1 }, this.animDuration);

        this.whoweareContainer
          .find(".whoweare-intro-container")
          .delay(100)
          .animate({ left: 0, opacity: 1 }, this.animDuration);
      }
    };

    scrollEvent = (e) => {
      const scrollVal = e.currentTarget.pageYOffset;

      this.homeAnimEvent(scrollVal);

      if ($(e.target).scrollTop() > 100) {
        $(".header-container").css({ background: "#fff" });
        $(".menu-burger").addClass("scrolledY");
        return;
      }

      if ($(e.target).scrollTop() < 100) {
        $(".header-container").css({ background: "transparent" });
        $(".menu-burger").removeClass("scrolledY");
        return;
      }
    };
  }

  const navigation = new Navigation();
  const services = new Services();
  const about = new About();
  const windowIns = new Window();

  navigation.menuCickEvent();
  navigation.loadEvents();

  services.lpLoadEvents();

  about.lpLoadEvents();

  windowIns.homeAnimEvent($(window).pageYOffset);

  $(window).on("scroll", (e) => windowIns.scrollEvent(e));
});
