// Builds the Destinations, Festivals and Things You Should Know pages from data.
(function () {
    "use strict";

    var page = document.body.dataset.page;
    var prefix = document.body.dataset.prefix || "";
    var D = window.ADINKRA_DATA || {};
    var H = window.ADINKRA_HOTELS || [];

    function el(tag, cls, text) {
        var e = document.createElement(tag);
        if (cls) { e.className = cls; }
        if (text !== undefined) { e.textContent = text; }
        return e;
    }

    function slugify(s) {
        return s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
    }

    function badge(status) {
        if (status === "pv") {
            return el("span", "badge pv", "Partially Verified");
        }
        return el("span", "badge uv", "Unverified, further research required");
    }

    function renderDestinations() {
        var nav = document.getElementById("region-nav");
        var root = document.getElementById("regions-root");
        if (!root || !D.regions) { return; }

        D.regions.forEach(function (r) {
            var id = slugify(r.name);

            var li = el("li");
            var a = el("a", "", r.name);
            a.href = "#" + id;
            li.appendChild(a);
            if (nav) { nav.appendChild(li); }

            var sec = el("section", "region");
            sec.id = id;
            sec.appendChild(el("h2", "", r.name + " Region"));
            sec.appendChild(el("p", "capital", "Regional capital: " + r.capital));
            sec.appendChild(el("p", "", r.summary));

            var grid = el("div", "card-grid");
            r.places.forEach(function (p) {
                var card = el("article", "card");
                card.appendChild(el("h3", "", p[0]));
                card.appendChild(el("p", "meta", p[1] + " | " + p[2]));
                card.appendChild(el("p", "", p[4]));
                card.appendChild(badge(p[3]));
                grid.appendChild(card);
            });
            sec.appendChild(grid);
            root.appendChild(sec);
        });
    }

    function renderFestivals() {
        var root = document.getElementById("festivals-root");
        if (!root || !D.festivals) { return; }
        D.festivals.forEach(function (f) {
            var card = el("article", "card");
            card.appendChild(el("h3", "", f.name));
            card.appendChild(el("p", "meta", f.where));
            card.appendChild(el("p", "", "When: " + f.when));
            card.appendChild(el("p", "", f.note));
            root.appendChild(card);
        });
    }

    function renderTransport() {
        var root = document.getElementById("transport-root");
        if (!root) { return; }
        D.transport.forEach(function (t) {
            var card = el("article", "card");
            card.appendChild(el("h3", "", t.name));
            card.appendChild(el("p", "", t.text));
            root.appendChild(card);
        });
    }

    function renderWeather() {
        var body = document.getElementById("weather-body");
        if (!body) { return; }
        D.months.forEach(function (m) {
            var tr = el("tr");
            tr.appendChild(el("th", "", m.m));
            tr.appendChild(el("td", "", m.south));
            tr.appendChild(el("td", "", m.north));
            tr.appendChild(el("td", "", m.tip));
            body.appendChild(tr);
        });
    }

    function renderLanguages() {
        var ul = document.getElementById("language-list");
        if (!ul) { return; }
        D.languages.forEach(function (l) {
            ul.appendChild(el("li", "", l));
        });
    }

    function renderHotels() {
        var root = document.getElementById("hotels-root");
        if (!root) { return; }
        var regions = [];
        H.forEach(function (h) {
            if (regions.indexOf(h.region) === -1) { regions.push(h.region); }
        });

        regions.forEach(function (region) {
            root.appendChild(el("h3", "", region));
            var grid = el("div", "card-grid");
            H.filter(function (h) { return h.region === region; }).forEach(function (h) {
                var card = el("article", "card hotel-card");
                var img = document.createElement("img");
                img.src = prefix + "assets/images/hotels/" + h.slug + ".jpg";
                img.alt = h.name + " in " + h.place;
                img.loading = "lazy";
                img.onerror = function () {
                    img.onerror = null;
                    img.src = prefix + "assets/images/hotels/" + h.slug + ".svg";
                };
                card.appendChild(img);

                var body = el("div", "hotel-body");
                body.appendChild(el("h4", "", h.name));
                body.appendChild(el("p", "meta", h.type + " | " + h.place));
                body.appendChild(el("p", "", h.note));
                card.appendChild(body);
                grid.appendChild(card);
            });
            root.appendChild(grid);
        });
    }

    if (page === "destinations") { renderDestinations(); }
    if (page === "festivals") { renderFestivals(); }
    if (page === "things") {
        renderTransport();
        renderWeather();
        renderLanguages();
        renderHotels();
    }
})();
