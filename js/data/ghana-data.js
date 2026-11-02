// Adinkra content data. Status codes:
//   pv = Partially Verified (documented, but hours, fees and access need confirming)
//   uv = Unverified, further research required
// Place format: [name, locality, category, status, note]

const GMMB_NOTE = "Listed in the GMMB notice of 20 December 2025 as temporarily closed. Confirm access before visiting.";

window.ADINKRA_DATA = {

regions: [
{
  name: "Greater Accra", capital: "Accra",
  summary: "Independence history, Pan-African heritage, museums, forts, markets, beaches and urban culture. A natural starting point for most visitors.",
  places: [
    ["Kwame Nkrumah Memorial Park", "Central Accra", "History", "pv", "Memorial to Ghana's first president and a Pan-African leader."],
    ["Independence Square and Black Star Monument", "Accra", "History", "pv", "National ceremonial space linked to independence celebrations."],
    ["W. E. B. Du Bois Centre", "Accra", "Diaspora heritage", "pv", "Linked to the African American scholar and Pan-Africanist. Confirm opening and tour arrangements."],
    ["National Museum of Ghana", "Accra", "Museum", "pv", "Exhibitions on Ghanaian history, objects and art."],
    ["James Fort", "Jamestown", "Fort", "pv", GMMB_NOTE],
    ["Ussher Fort", "Jamestown", "Fort", "pv", GMMB_NOTE],
    ["Jamestown Lighthouse and fishing community", "Jamestown", "Heritage", "pv", "Confirm whether the lighthouse and guided walks are open."],
    ["Christiansborg (Osu) Castle", "Osu", "Monument", "pv", "A documented monument. Do not assume it is open to tourists."],
    ["Makola Market", "Central Accra", "Market", "pv", "Food, textiles and daily life. Consider a guide."],
    ["Teshie and Nungua coffin-making workshops", "Teshie, Nungua", "Craft", "pv", "Arrange permission before visiting a workshop."],
    ["Shai Hills Resource Reserve", "Near Tema and Akosombo road", "Nature", "pv", "Savannah wildlife, hills and caves. Confirm fees and guides."],
    ["Legon Botanical Gardens", "University of Ghana area", "Nature", "pv", "Gardens and outdoor recreation."],
    ["Kokrobite Beach", "Kokrobite", "Beach and music", "pv", "Beach, drumming and cultural programmes. Confirm current offerings."],
    ["La Pleasure Beach and Bojo Beach", "Accra coast", "Beach", "pv", "Confirm access, transport and fees."],
    ["Ada estuary and river mouth", "Ada", "Water and leisure", "pv", "River tours and water sports. Verify each operator."],
    ["Fort Kongenstein", "Ada", "Fort", "pv", "National monument. Confirm access."],
    ["Fort Augustaborg", "Teshie", "Fort", "pv", "National monument. Confirm access."]
  ]
},
{
  name: "Ashanti", capital: "Kumasi",
  summary: "Asante royal history, kente and Adinkra cloth, woodcarving, traditional architecture, lakes and forests. Very important to Adinkra's cultural story.",
  places: [
    ["Manhyia Palace Museum", "Kumasi", "Royal heritage", "pv", "Asante monarchy and traditional governance."],
    ["Kumasi Fort and Military Museum", "Kumasi", "Museum", "pv", "Military and colonial-era history. Published hours may be outdated."],
    ["Prempeh II Jubilee Museum", "Kumasi", "Museum", "pv", "Asante royal history. Confirm current access."],
    ["Okomfo Anokye Sword site", "Kumasi", "History", "pv", "Linked to Asante state formation. Confirm access."],
    ["Kejetia Market", "Kumasi", "Market", "pv", "One of the largest markets in West Africa. Go with a guide."],
    ["Bonwire", "Bonwire", "Kente weaving", "pv", "Learn about kente patterns and techniques. Ask which workshops welcome visitors."],
    ["Ntonso", "Ntonso", "Adinkra cloth", "pv", "Traditional Adinkra cloth and symbol making."],
    ["Adanwomase", "Adanwomase", "Kente weaving", "pv", "Weaving community. Confirm visitor services."],
    ["Ahwiaa craft village", "Ahwiaa", "Woodcarving", "pv", "Carving and crafts."],
    ["Asante traditional buildings", "Kumasi area and nearby towns", "Architecture", "pv", "UNESCO-listed group. Individual buildings need separate access checks."],
    ["Lake Bosomtwe", "Bosomtwe District", "Nature", "pv", "Crater lake with villages and scenic hills."],
    ["Bobiri Forest Reserve and Butterfly Sanctuary", "Near Kubease", "Nature", "pv", "Forest ecology and butterflies."],
    ["Owabi Wildlife Sanctuary", "Ashanti", "Wildlife", "pv", "Birds and forest habitat."],
    ["Bomfobiri Wildlife Sanctuary", "Ashanti", "Wildlife", "pv", "Hills, wildlife and seasonal waterfalls."],
    ["Tewobaabi, Mpasaaso and Nyankumasu waterfalls", "Ashanti", "Waterfalls", "pv", "Exact routes, seasons and safety must be confirmed."],
    ["Yaa Asantewaa Museum", "Sreso Tinpom", "Museum", "pv", "Associated with the queen mother who led the 1900 resistance. Confirm operation."],
    ["Bosumpra Rockshelter", "To be confirmed", "Archaeology", "pv", "Documented archaeological site. Access unknown."],
    ["Golden Stool Cave and Komfo Anokye footprints", "Barekese, Nkakom", "Heritage lead", "uv", "Regional leads only. Do not advertise visits yet."]
  ]
},
{
  name: "Western", capital: "Sekondi-Takoradi",
  summary: "Coastal forts, golden beaches, Nzema culture, stilt-house villages and rainforest.",
  places: [
    ["Nzulezu stilt village", "Beyin, near Lake Tadane", "Culture", "pv", "Village built on stilts over water. Visit by canoe with local guides."],
    ["Busua Beach", "Busua", "Beach", "pv", "Popular for surfing lessons and relaxing."],
    ["Fort Metal Cross", "Dixcove", "Fort", "pv", "Historic coastal fort. Confirm access."],
    ["Fort Apollonia", "Beyin", "Fort", "pv", GMMB_NOTE],
    ["Fort St. Anthony", "Axim", "Fort", "pv", GMMB_NOTE],
    ["Fort Orange", "Sekondi", "Fort", "pv", GMMB_NOTE],
    ["Cape Three Points", "Near Busua", "Nature", "pv", "Southernmost tip of Ghana with a lighthouse. Confirm access."],
    ["Ankasa Conservation Area", "Western and Western North", "Rainforest", "pv", "Forest wildlife and birding. Confirm access and guides."],
    ["Butre and Akwidaa", "Western coast", "Community and beach", "pv", "Quiet fishing villages and eco-lodges."]
  ]
},
{
  name: "Western North", capital: "Sefwi Wiawso",
  summary: "Rainforest, cocoa-growing communities and cultural heritage. Tourism here is less developed, so plan carefully.",
  places: [
    ["Bia National Park and Biosphere Reserve", "Bia area", "Rainforest", "pv", "Protected forest. Confirm visitor access."],
    ["Sefwi Wiawso traditional area", "Sefwi Wiawso", "Culture", "uv", "Chieftaincy heritage lead. Needs research."],
    ["Cocoa-growing communities", "Across the region", "Community tourism", "uv", "Farm visit possibilities need verified hosts."],
    ["Regional waterfalls", "To be identified", "Waterfalls", "uv", "Specific sites need identification and verification."]
  ]
},
{
  name: "Central", capital: "Cape Coast",
  summary: "The heart of slave-trade history on the coast: castles, forts, ancestral sites, canopy walkway and beaches.",
  places: [
    ["Cape Coast Castle", "Cape Coast", "UNESCO castle", "pv", "Major site for diaspora visitors, with a museum and guided tours."],
    ["Elmina Castle (St. George's Castle)", "Elmina", "UNESCO castle", "pv", "One of the oldest European buildings in sub-Saharan Africa."],
    ["Fort St. Jago", "Elmina", "Fort", "pv", "Overlooks Elmina. Confirm access."],
    ["Fort William", "Cape Coast", "Fort", "pv", "Lighthouse fort with views over the town."],
    ["Fort Amsterdam", "Abandze", "Fort", "pv", "Historic fort. Confirm condition and access."],
    ["Kakum National Park and canopy walkway", "Near Cape Coast", "Rainforest", "pv", "Treetop walkway and forest trails."],
    ["Assin Manso Ancestral Slave River Park", "Assin Manso", "Diaspora heritage", "pv", "Last bath site for captives, with ceremonies for diaspora visitors."],
    ["Fetu Afahye and Bakatue communities", "Cape Coast, Elmina", "Festivals", "pv", "See the Festivals page."],
    ["Brenu Beach and Anomabo", "Central coast", "Beach and history", "pv", "Beaches and fishing towns."],
    ["Winneba", "Winneba", "Culture", "pv", "Home of the Aboakyir deer hunt festival."]
  ]
},
{
  name: "Eastern", capital: "Koforidua",
  summary: "Mountains, waterfalls, Lake Volta at Akosombo, botanical gardens and bead-making traditions.",
  places: [
    ["Aburi Botanical Gardens", "Aburi", "Gardens", "pv", "Cool hilltop gardens and a craft village nearby."],
    ["Akosombo Dam and Lake Volta", "Akosombo", "Landscape", "pv", "Hydro dam and large lake with boat trips."],
    ["Boti Falls and Umbrella Rock", "Boti", "Waterfalls", "pv", "Twin waterfall and a rock formation."],
    ["Kwahu Plateau", "Kwahu", "Mountains", "pv", "Scenic ridge with paragliding at Easter."],
    ["Krobo Mountain and bead markets", "Krobo area", "Heritage and crafts", "pv", "Bead-making heritage. Choose reputable guides."],
    ["Bunso Arboretum", "Bunso", "Nature", "pv", "Forest walks and trees."],
    ["Atiwa Forest", "Atiwa", "Forest", "pv", "Montane forest. Confirm access."]
  ]
},
{
  name: "Volta", capital: "Ho",
  summary: "Waterfalls, mountains, Ewe culture, kente weaving and a long coastline with lagoons.",
  places: [
    ["Wli Waterfalls", "Hohoe area", "Waterfalls", "pv", "One of the tallest waterfalls in West Africa. Short hike through forest."],
    ["Mount Afadjato", "Liati Wote", "Mountain", "pv", "Highest mountain in Ghana. Guided hikes."],
    ["Tagbo Falls", "Liati Wote", "Waterfalls", "pv", "Waterfall near the Afadjato trail."],
    ["Tafi Atome Monkey Sanctuary", "Tafi Atome", "Wildlife and community", "pv", "Community-run monkey sanctuary."],
    ["Amedzofe", "Amedzofe", "Mountain village", "pv", "Cool hill town with nature walks."],
    ["Kente weaving at Agbozume and Kpetoe", "Volta", "Craft", "pv", "Ewe kente weaving communities."],
    ["Fort Prinzenstein", "Keta", "Fort", "pv", "Historic fort at Keta. Confirm condition and access."],
    ["Keta Lagoon and Anloga", "Keta area", "Landscape", "pv", "Lagoon landscapes and Anlo culture."],
    ["Adaklu Mountain", "Adaklu", "Mountain", "pv", "Hiking and views near Ho."]
  ]
},
{
  name: "Oti", capital: "Dambai",
  summary: "Lake Volta, rivers, forests and traditional communities in a lesser-visited region.",
  places: [
    ["Kyabobo National Park", "Near Nkwanta", "National park", "pv", "Hills and wildlife. Confirm facilities and guides."],
    ["Lake Volta at Dambai", "Dambai", "Lake", "pv", "Boat transport and lakeside life."],
    ["Kete Krachi", "Kete Krachi", "Heritage", "uv", "Historic lake town. Needs research."],
    ["Krachi traditional shrines", "Krachi area", "Spiritual heritage", "uv", "Visits require permission from custodians."]
  ]
},
{
  name: "Northern", capital: "Tamale",
  summary: "Dagbon heritage, savannah landscapes, smock weaving, festivals and historic towns.",
  places: [
    ["Gbewaa Palace and Dagbon heritage", "Yendi", "Royal heritage", "pv", "Seat of the Dagbon kingdom. Visit with proper protocol."],
    ["Tamale Central Market", "Tamale", "Market", "pv", "Northern textiles, foods and crafts."],
    ["Damba and Bugum celebrations", "Tamale, Yendi", "Festivals", "pv", "See the Festivals page."],
    ["Smock and cloth weaving", "Northern towns", "Craft", "uv", "Identify welcoming workshops."],
    ["Savannah landscapes and villages", "Across the region", "Community tourism", "uv", "Find verified guides."]
  ]
},
{
  name: "Savannah", capital: "Damongo",
  summary: "Ghana's largest national park, ancient mosques, rivers and historic trading towns.",
  places: [
    ["Mole National Park", "Near Larabanga", "Wildlife", "pv", "Elephants, antelope, birds and walking safaris. Confirm fees and seasons."],
    ["Larabanga Mosque", "Larabanga", "Sudanese-style mosque", "pv", "One of the oldest mosques in West Africa. Respect prayer times."],
    ["Salaga slave market and wells", "Salaga", "Diaspora heritage", "pv", "Historic trading town. Confirm interpretation and access."],
    ["Mognori Eco-Village", "West Gonja", "Community tourism", "pv", "Village visits and canoe trips. Confirm arrangements."],
    ["Daboya", "Daboya", "Craft", "uv", "Known for traditional cloth. Needs research."],
    ["Bui National Park", "Bui area", "Wildlife", "pv", "Hippos and river landscapes. Shared with Bono Region."]
  ]
},
{
  name: "North East", capital: "Nalerigu",
  summary: "Traditional kingdoms, escarpments and rural cultural heritage.",
  places: [
    ["Naaba's Palace", "Nalerigu", "Royal heritage", "pv", "Seat of the Mamprugu kingdom. Visit with protocol."],
    ["Gambaga Escarpment", "Gambaga", "Landscape", "pv", "Scenic escarpment."],
    ["Nakpanduri Escarpment", "Nakpanduri", "Landscape", "pv", "Scenic cliffs and viewpoints."],
    ["Traditional villages", "Across the region", "Community tourism", "uv", "Need verified hosts and guides."]
  ]
},
{
  name: "Upper East", capital: "Bolgatanga",
  summary: "Paga crocodiles, Tongo Hills, painted compounds, basketry and festivals.",
  places: [
    ["Paga Crocodile Pond", "Paga", "Wildlife and culture", "pv", "Sacred crocodiles. Go with a local guide."],
    ["Tongo Hills and Tengzug Shrine", "Tongo", "Landscape and shrine", "pv", "Rock formations. Follow custodian instructions."],
    ["Sirigu pottery and painted houses", "Sirigu", "Art and architecture", "pv", "Women's art cooperative and decorated homes."],
    ["Bolgatanga basket market", "Bolgatanga", "Crafts", "pv", "Famed woven baskets."],
    ["Pikworo Slave Camp", "Nania", "Diaspora heritage", "pv", "Site linked to the slave trade. Confirm access."],
    ["Navrongo Cathedral", "Navrongo", "Architecture", "pv", "Mud-brick and decorated church."]
  ]
},
{
  name: "Upper West", capital: "Wa",
  summary: "Wa heritage, mosques, hippo sanctuary and community tourism.",
  places: [
    ["Wa Naa's Palace", "Wa", "Royal heritage", "pv", "Historic palace and Sudanese-style architecture."],
    ["Wa Friday Mosque", "Wa", "Mosque", "pv", "Respect prayer times."],
    ["Wechiau Community Hippo Sanctuary", "Wechiau", "Wildlife", "pv", "Community-run hippo viewing on the Black Volta."],
    ["Gwollu Slave Defence Wall", "Gwollu", "Heritage", "pv", "Defence wall linked to resistance to slave raiders. Confirm access."],
    ["Nandom Cathedral", "Nandom", "Architecture", "pv", "Historic church."],
    ["Gbele Resource Reserve", "Upper West", "Wildlife", "pv", "Savannah reserve. Confirm access."]
  ]
},
{
  name: "Bono", capital: "Sunyani",
  summary: "Forests, rivers, traditional towns and the growing hub of Sunyani. More research is needed here.",
  places: [
    ["Bui National Park", "Bui area", "Wildlife", "pv", "Shared with Savannah Region."],
    ["Sunyani and Bono traditional areas", "Sunyani", "Culture", "uv", "Cultural leads need research."],
    ["Dormaa traditional heritage", "Dormaa", "Heritage", "uv", "Needs research."],
    ["Regional waterfalls and forests", "To be identified", "Nature", "uv", "Need identification and verification."]
  ]
},
{
  name: "Bono East", capital: "Techiman",
  summary: "Kintampo waterfalls, monkey sanctuary, large markets and Bono heritage.",
  places: [
    ["Kintampo Waterfalls", "Kintampo", "Waterfalls", "pv", "Popular stopover on the Accra to Tamale route."],
    ["Boabeng-Fiema Monkey Sanctuary", "Nkoranza area", "Wildlife and community", "pv", "Sacred monkeys protected by two villages."],
    ["Techiman Market", "Techiman", "Market", "pv", "One of Ghana's major food markets."],
    ["Bono Manso", "Near Techiman", "Heritage", "pv", "Historic Bono settlement. Confirm interpretation."],
    ["Tano Boase Sacred Grove", "Techiman area", "Spiritual heritage", "pv", "Visits require permission."]
  ]
},
{
  name: "Ahafo", capital: "Goaso",
  summary: "Forest landscapes, cocoa communities and ecotourism possibilities. Tourism is still emerging.",
  places: [
    ["Tano Offin Forest Reserve", "Ahafo area", "Forest", "uv", "Needs verification of access."],
    ["Cocoa farming communities", "Ahafo", "Community tourism", "uv", "Need verified hosts."],
    ["Traditional heritage of Ahafo", "Goaso", "Culture", "uv", "Needs research."]
  ]
}
],

festivals: [
  { name: "Akwasidae", where: "Kumasi, Ashanti", when: "Every six weeks on the Asante calendar", note: "Royal observance with regalia and drumming. Confirm dates and photography rules." },
  { name: "Adae Kese", where: "Kumasi, Ashanti", when: "Major Adae, on the Asante calendar", note: "Grand ceremonial occasion for the Asante." },
  { name: "Homowo", where: "Greater Accra (Ga)", when: "August to September", note: "Harvest festival that means hooting at hunger." },
  { name: "Chale Wote Street Art Festival", where: "Jamestown, Accra", when: "Usually August", note: "Street art, performance and music. Check current organisers." },
  { name: "Aboakyir", where: "Winneba, Central", when: "Early May", note: "Deer hunt festival of the Effutu people." },
  { name: "Bakatue", where: "Elmina, Central", when: "Early July", note: "Opens the fishing season on the Benya Lagoon." },
  { name: "Fetu Afahye", where: "Cape Coast, Central", when: "Early September", note: "Traditional festival of the Oguaa people." },
  { name: "Panafest and Emancipation Day", where: "Cape Coast and Accra", when: "July and August", note: "Pan-African gatherings for the diaspora. Check the current programme and dates." },
  { name: "Odwira", where: "Akropong, Eastern", when: "September to October", note: "Thanksgiving festival of the Akuapem." },
  { name: "Kwahu Easter Festival", where: "Kwahu Plateau, Eastern", when: "Easter weekend", note: "Large gathering of returnees with music and paragliding." },
  { name: "Hogbetsotso", where: "Anlo area, Volta", when: "Early November", note: "Commemorates the migration of the Anlo Ewe." },
  { name: "Kundum", where: "Western Region (Ahanta and Nzema)", when: "August to October, varies by town", note: "Thanksgiving and purification festival." },
  { name: "Damba", where: "Tamale and Yendi, Northern", when: "Varies with the Islamic calendar", note: "Dagbon celebration with horse riders and drumming." },
  { name: "Bugum (Fire Festival)", where: "Dagbon area, Northern", when: "Varies with the Islamic calendar", note: "Torchlight processions of the Dagbon." },
  { name: "Asafotufiam", where: "Ada, Greater Accra", when: "Usually August", note: "Warriors festival of the Dangme people." }
],

months: [
  { m: "January", south: "Dry and hot. Harmattan haze with cooler mornings.", north: "Dry, dusty harmattan. Cold nights, hot days.", tip: "Pack light layers, lip balm and a dust cover for cameras." },
  { m: "February", south: "Hot and mostly dry. Haze fades.", north: "Dry and getting hotter.", tip: "Carry water and sun protection." },
  { m: "March", south: "Hot and humid. First rains may arrive.", north: "Very hot and dry. Hottest period begins.", tip: "Plan outdoor activities early in the day." },
  { m: "April", south: "Rainy season begins with heavy showers.", north: "Hot with first storms.", tip: "Bring a light rain jacket." },
  { m: "May", south: "Heavy rain and humidity.", north: "Rains begin.", tip: "Allow extra travel time. Roads can flood." },
  { m: "June", south: "Peak rains on the coast, especially in the west.", north: "Rainy and green.", tip: "Waterproof bag and sturdy shoes." },
  { m: "July", south: "Rains ease, cloudy and cooler.", north: "Rainy season continues.", tip: "Good time for cultural events in the south." },
  { m: "August", south: "Short dry break, cooler and overcast.", north: "Heavy rains.", tip: "Comfortable for Accra and the coast." },
  { m: "September", south: "Minor rainy season starts.", north: "Peak rains. Some roads may be hard to use.", tip: "Check road conditions before northern trips." },
  { m: "October", south: "Showers and humidity.", north: "Rains taper off.", tip: "Carry an umbrella." },
  { m: "November", south: "Dry season returns. Pleasant weather.", north: "Dry and sunny.", tip: "A popular month for travel." },
  { m: "December", south: "Dry with harmattan beginning.", north: "Dry, hazy, cool nights.", tip: "Book early. Festive travel is busy." }
],

transport: [
  { name: "Trotro", text: "Shared minibuses that run fixed routes in cities and between towns. Very cheap and frequent, but crowded. Ask locals about the right stop." },
  { name: "Taxis", text: "Shared taxis follow set routes. Private taxis, sometimes called dropping, take you directly. Agree the price before you get in." },
  { name: "Ride-hailing apps", text: "Apps such as Uber and Bolt work in Accra, Kumasi and some larger cities. Useful for fixed prices and safety." },
  { name: "Intercity buses", text: "Coaches link major cities, for example Accra, Kumasi, Cape Coast, Takoradi and Tamale. Book ahead for comfort on popular routes." },
  { name: "Domestic flights", text: "Flights link Accra with cities such as Kumasi, Tamale, Takoradi and Sunyani. Useful for the north. Check airlines and schedules." },
  { name: "Hired car with driver", text: "A common choice for sightseeing circuits, such as the Cape Coast and Kakum day trip. Agree the price and route in advance." },
  { name: "Motorbike and tricycle taxis", text: "Motorbike taxis (okada) and three-wheelers are common in some towns. Rules and safety vary, so check local regulations and wear a helmet." },
  { name: "Ferries and boats", text: "Boats cross Lake Volta and the lagoons. Canoes reach places like Nzulezu. Use life jackets and licensed operators." }
],

languages: [
  "English (the official language)", "Akan (Asante Twi, Akuapem Twi, Fante)", "Ewe", "Ga", "Dangme",
  "Nzema", "Dagbani", "Dagaare", "Gonja", "Kasem", "Hausa (widely used as a trade language)",
  "Frafra (Gurune)", "Kusaal", "Buli", "Mampruli", "Waali", "Sissala", "Likpe",
  "Guan languages (such as Gonja, Nawuri, Efutu)", "Ahanta", "Sehwi", "Dagbani dialects",
  "Many other local languages and dialects"
]

};
