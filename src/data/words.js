const words = [
    {
        "word":  "Bulletproof",
        "type":  "verb",
        "definition":  "To make something resistant to failure or attack.",
        "pronunciation":  "/ˈbʊl.ɪt.pruːf/",
        "example":  "Before launching the product, the team bulletproofed every feature by testing it against worst‑case scenarios, leaving no vulnerability for competitors to exploit."
    },
    {
        "word":  "Checkmated",
        "type":  "verb",
        "definition":  "To be placed in a position where no good move is possible.",
        "pronunciation":  "/tʃekˈmeɪtɪd/",
        "example":  "After the CEO resigned and the main investor pulled out, the startup was completely checkmated — any attempt to continue would only deepen the losses."
    },
    {
        "word":  "Leeway",
        "type":  "noun",
        "definition":  "Freedom to act or decide within certain limits.",
        "pronunciation":  "/ˈliː.weɪ/",
        "example":  "The project manager gave the designers significant leeway, allowing them to choose their own tools and schedules as long as they met the final deadline."
    },
    {
        "word":  "Shorting",
        "type":  "verb",
        "definition":  "The practice of selling borrowed assets hoping to buy them back at a lower price.",
        "pronunciation":  "/ˈʃɔːrtɪŋ/",
        "example":  "Hedge funds started shorting the renewable energy company after a leaked report showed its main technology was still years away from being profitable."
    },
    {
        "word":  "Causalism",
        "type":  "noun",
        "definition":  "The philosophical doctrine that every event has a specific cause.",
        "pronunciation":  "/ˈkɔː.zəl.ɪ.zəm/",
        "example":  "Causalism struggles to explain quantum randomness, where particles seem to appear without any prior cause, challenging centuries of deterministic thinking."
    },
    {
        "word":  "Pernicious",
        "type":  "adjective",
        "definition":  "Having a very harmful effect, especially gradually over time.",
        "pronunciation":  "/pəˈnɪʃ.əs/",
        "example":  "The pernicious influence of fake news on democratic elections has become so severe that even fact‑checking platforms struggle to contain the damage."
    },
    {
        "word":  "Obfuscate",
        "type":  "verb",
        "definition":  "To deliberately make something unclear or confusing.",
        "pronunciation":  "/ˈɒb.fʌs.keɪt/",
        "example":  "The company tried to obfuscate the true cause of the data breach by releasing a 200‑page report filled with technical jargon and irrelevant details."
    },
    {
        "word":  "Mercurial",
        "type":  "adjective",
        "definition":  "Characterized by sudden and unpredictable changes in mood or opinion.",
        "pronunciation":  "/mɜːˈkjʊə.ri.əl/",
        "example":  "Her mercurial temperament made her a brilliant but difficult collaborator; one day she praised the design, the next she wanted to scrap it entirely."
    },
    {
        "word":  "Sycophant",
        "type":  "noun",
        "definition":  "A person who flatters powerful people to gain advantage.",
        "pronunciation":  "/ˈsɪk.ə.fænt/",
        "example":  "The CEO was surrounded by sycophants who never dared to disagree, which ultimately led to disastrous decisions that no one questioned."
    },
    {
        "word":  "Ennui",
        "type":  "noun",
        "definition":  "A feeling of listlessness, boredom, and dissatisfaction arising from a lack of interest.",
        "pronunciation":  "/ɒnˈwiː/",
        "example":  "After five years of the same routine — wake up, commute, work, return home — he felt a deep ennui that no vacation or hobby could cure."
    },
    {
        "word":  "Laconic",
        "type":  "adjective",
        "definition":  "Using very few words to express something, often to the point of seeming rude.",
        "pronunciation":  "/ləˈkɒn.ɪk/",
        "example":  "When asked why he had missed three deadlines, his laconic reply was simply \u0027Overwhelmed\u0027 — no explanation, no apology, just two syllables."
    },
    {
        "word":  "Ineffable",
        "type":  "adjective",
        "definition":  "Too great, beautiful, or extreme to be described in words.",
        "pronunciation":  "/ɪˈnef.ə.bəl/",
        "example":  "The joy of holding his newborn daughter for the first time was ineffable; no poem, no song, no painting could capture that precise feeling."
    },
    {
        "word":  "Quixotic",
        "type":  "adjective",
        "definition":  "Extremely idealistic in a way that ignores practical realities.",
        "pronunciation":  "/kwɪkˈsɒt.ɪk/",
        "example":  "His quixotic plan to end poverty by simply printing more money ignored every basic law of economics, yet he pursued it with unwavering passion."
    },
    {
        "word":  "Tendentious",
        "type":  "adjective",
        "definition":  "Intentionally favoring one side or opinion, often in a biased way.",
        "pronunciation":  "/tenˈden.ʃəs/",
        "example":  "The documentary was so tendentious that it omitted all evidence contradicting its thesis, reducing a complex issue to a one‑sided rant."
    },
    {
        "word":  "Equivocate",
        "type":  "verb",
        "definition":  "To avoid giving a clear or direct answer, often to hide the truth.",
        "pronunciation":  "/ɪˈkwɪv.ə.keɪt/",
        "example":  "When the reporter asked whether the factory had violated environmental laws, the spokesperson equivocated, talking about \u0027ongoing assessments\u0027 and \u0027future compliance\u0027."
    },
    {
        "word":  "Magnanimous",
        "type":  "adjective",
        "definition":  "Very generous and forgiving, especially toward a rival or someone weaker.",
        "pronunciation":  "/mæɡˈnæn.ɪ.məs/",
        "example":  "After winning the championship, the veteran player was magnanimous, praising the young opponent who had fought hard and promising to mentor him next season."
    },
    {
        "word":  "Incontrovertible",
        "type":  "adjective",
        "definition":  "Impossible to deny, dispute, or doubt.",
        "pronunciation":  "/ɪnˌkɒn.trəˈvɜː.tə.bəl/",
        "example":  "The video from three different security cameras provided incontrovertible proof that the accused was not even in the city on the night of the crime."
    },
    {
        "word":  "Parsimonious",
        "type":  "adjective",
        "definition":  "Extremely unwilling to spend money or use resources; stingy.",
        "pronunciation":  "/ˌpɑː.sɪˈməʊ.ni.əs/",
        "example":  "The parsimonious landlord refused to fix the broken heater, claiming that the tenants should just wear more sweaters, even during the freezing winter."
    },
    {
        "word":  "Ebullient",
        "type":  "adjective",
        "definition":  "Full of cheerful energy, excitement, and enthusiasm.",
        "pronunciation":  "/ɪˈbʌl.i.ənt/",
        "example":  "The crowd was ebullient when the home team scored the winning goal in the last second, jumping, hugging, and singing for half an hour after the match ended."
    },
    {
        "word":  "Inimical",
        "type":  "adjective",
        "definition":  "Unfriendly and harmful; tending to obstruct or damage.",
        "pronunciation":  "/ɪˈnɪm.ɪ.kəl/",
        "example":  "The new trade policy was inimical to small farmers, making it nearly impossible for them to compete with subsidized foreign agribusiness."
    },
    {
        "word":  "Pellucid",
        "type":  "adjective",
        "definition":  "Very clear and easy to understand; transparent.",
        "pronunciation":  "/pəˈluː.sɪd/",
        "example":  "The professor\u0027s pellucid explanation of quantum entanglement used only everyday analogies, so even first‑year students could follow without prior physics knowledge."
    },
    {
        "word":  "Inveigle",
        "type":  "verb",
        "definition":  "To persuade someone by flattery, charm, or trickery.",
        "pronunciation":  "/ɪnˈveɪ.ɡəl/",
        "example":  "He inveigled his way into the exclusive gala by pretending to be a journalist and complimenting the security guard\u0027s professionalism until the guard let him in."
    },
    {
        "word":  "Recalcitrant",
        "type":  "adjective",
        "definition":  "Stubbornly refusing to obey rules, authority, or social norms.",
        "pronunciation":  "/rɪˈkæl.sɪ.trənt/",
        "example":  "The recalcitrant student ignored every warning, continuing to use his phone during lectures until the dean finally suspended him for a week."
    },
    {
        "word":  "Anodyne",
        "type":  "adjective",
        "definition":  "Harmless, inoffensive, and unlikely to cause disagreement or controversy.",
        "pronunciation":  "/ˈæn.ə.daɪn/",
        "example":  "The politician\u0027s anodyne speech contained no concrete proposals, just vague calls for \u0027unity\u0027 and \u0027working together\u0027 that pleased no one but offended nobody."
    },
    {
        "word":  "Apotheosis",
        "type":  "noun",
        "definition":  "The highest or most perfect example of something; the culmination.",
        "pronunciation":  "/əˌpɒθ.iˈəʊ.sɪs/",
        "example":  "Many critics consider Miles Davis\u0027s album \u0027Kind of Blue\u0027 the apotheosis of jazz — a flawless blend of improvisation, melody, and mood that has never been surpassed."
    },
    {
        "word":  "Intractable",
        "type":  "adjective",
        "definition":  "Very difficult to control, manage, or solve.",
        "pronunciation":  "/ɪnˈtræk.tə.bəl/",
        "example":  "The conflict over water rights became intractable after three decades of failed negotiations, with both sides unwilling to compromise even on minor issues."
    },
    {
        "word":  "Lambent",
        "type":  "adjective",
        "definition":  "Glowing or flickering softly, often with a gentle light.",
        "pronunciation":  "/ˈlæm.bənt/",
        "example":  "The lambent flames of the campfire cast dancing shadows on the trees, creating a peaceful atmosphere that made everyone forget their phones and just talk."
    },
    {
        "word":  "Mendacity",
        "type":  "noun",
        "definition":  "The tendency to lie, deceive, or be untruthful.",
        "pronunciation":  "/menˈdæs.ə.ti/",
        "example":  "The journalist exposed the senator\u0027s mendacity by comparing every statement he had made over five years with documented facts — the contradictions filled 30 pages."
    },
    {
        "word":  "Obdurate",
        "type":  "adjective",
        "definition":  "Stubbornly refusing to change one\u0027s opinion or course of action.",
        "pronunciation":  "/ˈɒb.dʒə.rət/",
        "example":  "Despite the overwhelming evidence that his strategy was failing, the general remained obdurate, refusing to retreat and costing hundreds of lives."
    },
    {
        "word":  "Penumbra",
        "type":  "noun",
        "definition":  "A surrounding area of partial shadow, influence, or ambiguity.",
        "pronunciation":  "/pəˈnʌm.brə/",
        "example":  "The legal question fell into the penumbra of existing law — not clearly forbidden, not clearly allowed, leaving judges to argue over its true meaning."
    },
    {
        "word":  "Querulous",
        "type":  "adjective",
        "definition":  "Constantly complaining in a petulant or whining manner.",
        "pronunciation":  "/ˈkwer.ə.ləs/",
        "example":  "The querulous customer called the support line five times in one hour, each time complaining about a different minor issue, from font size to button color."
    },
    {
        "word":  "Recondite",
        "type":  "adjective",
        "definition":  "Not known about by most people; obscure and difficult to understand.",
        "pronunciation":  "/rɪˈkɒn.daɪt/",
        "example":  "The professor\u0027s recondite research on 12th‑century monastic calligraphy was fascinating to the three people in the world who could understand it, but impenetrable to everyone else."
    },
    {
        "word":  "Saturnine",
        "type":  "adjective",
        "definition":  "Gloomy, slow, and serious in temperament.",
        "pronunciation":  "/ˈsæt.ə.naɪn/",
        "example":  "His saturnine mood darkened the entire office; he spoke only in monosyllables, avoided eye contact, and seemed to carry an invisible weight that depressed everyone around him."
    },
    {
        "word":  "Truculent",
        "type":  "adjective",
        "definition":  "Eager to argue, fight, or cause conflict.",
        "pronunciation":  "/ˈtrʌk.jə.lənt/",
        "example":  "The truculent customer at the airline counter shouted at every employee, threatened to sue, and finally had to be removed by security before the flight could board."
    },
    {
        "word":  "Ubiquitous",
        "type":  "adjective",
        "definition":  "Seeming to be present everywhere at the same time.",
        "pronunciation":  "/juːˈbɪk.wɪ.təs/",
        "example":  "Smartphones have become so ubiquitous in modern life that it feels strange to see someone without one — even homeless people often carry a cheap device to stay connected."
    },
    {
        "word":  "Vituperative",
        "type":  "adjective",
        "definition":  "Full of bitter, harsh, and abusive language.",
        "pronunciation":  "/vaɪˈtjuː.pər.ə.tɪv/",
        "example":  "The review was so vituperative that the author burst into tears; it called her prose \u0027unreadable,\u0027 her plot \u0027idiotic,\u0027 and her characters \u0027caricatures of caricatures\u0027."
    },
    {
        "word":  "Winsome",
        "type":  "adjective",
        "definition":  "Charming and attractive in a simple, innocent way.",
        "pronunciation":  "/ˈwɪn.səm/",
        "example":  "Her winsome smile and genuine curiosity about everyone\u0027s stories made her the most beloved person at the party, even though she spoke very little about herself."
    },
    {
        "word":  "Xeriscape",
        "type":  "noun",
        "definition":  "A style of landscaping that requires very little water, using drought‑resistant plants.",
        "pronunciation":  "/ˈzɪr.ɪ.skeɪp/",
        "example":  "In the middle of the desert, the hotel\u0027s xeriscape garden featured cacti, succulents, and gravel paths — beautiful and green without wasting a single drop of water."
    },
    {
        "word":  "Yaw",
        "type":  "verb",
        "definition":  "To swing or turn temporarily off course, especially for a ship or aircraft.",
        "pronunciation":  "/jɔː/",
        "example":  "The small boat began to yaw violently in the crosswind, forcing the captain to fight the helm to keep it from capsizing."
    },
    {
        "word":  "Zealous",
        "type":  "adjective",
        "definition":  "Showing great energy, passion, and dedication for a cause.",
        "pronunciation":  "/ˈzel.əs/",
        "example":  "The zealous volunteer worked 80‑hour weeks for the animal shelter, sleeping on a cot in the back room so she could care for the sick dogs at any hour."
    },
    {
        "word":  "Eschew",
        "type":  "verb",
        "definition":  "To deliberately avoid, reject, or abstain from something.",
        "pronunciation":  "/ɪsˈtʃuː/",
        "example":  "Health‑conscious eaters eschew processed foods entirely, reading every ingredient label and refusing anything with artificial preservatives or added sugar."
    },
    {
        "word":  "Facetious",
        "type":  "adjective",
        "definition":  "Treating serious issues with inappropriate humor; sarcastic in a frivolous way.",
        "pronunciation":  "/fəˈsiː.ʃəs/",
        "example":  "Don\u0027t be facetious about the layoffs — this is not the time for jokes. People are losing their livelihoods, and your quips about \u0027free time\u0027 are deeply offensive."
    },
    {
        "word":  "Garrulous",
        "type":  "adjective",
        "definition":  "Excessively talkative, especially about trivial matters.",
        "pronunciation":  "/ˈɡær.ə.ləs/",
        "example":  "The garrulous tour guide never paused for breath, rattling off dates, names, and anecdotes for three straight hours until even the most patient tourists started yawning."
    },
    {
        "word":  "Halcyon",
        "type":  "adjective",
        "definition":  "Calm, peaceful, prosperous, and happy — often referring to a past time.",
        "pronunciation":  "/ˈhæl.si.ən/",
        "example":  "She often recalled the halcyon days of her childhood, when summers seemed to last forever and the biggest worry was which tree to climb next."
    },
    {
        "word":  "Iconoclast",
        "type":  "noun",
        "definition":  "Someone who attacks or criticizes cherished beliefs, traditions, or institutions.",
        "pronunciation":  "/aɪˈkɒn.ə.klæst/",
        "example":  "The artist was a true iconoclast, burning religious paintings in public and declaring that all art should be destroyed every fifty years to force constant reinvention."
    },
    {
        "word":  "Jettison",
        "type":  "verb",
        "definition":  "To throw something away to lighten a load, or to discard something unwanted.",
        "pronunciation":  "/ˈdʒet.ɪ.sən/",
        "example":  "The captain ordered the crew to jettison the cargo — hundreds of expensive electronics — into the sea to keep the sinking ship afloat."
    },
    {
        "word":  "Knell",
        "type":  "noun",
        "definition":  "A sign or announcement that something bad, sad, or disastrous will happen.",
        "pronunciation":  "/nel/",
        "example":  "The sudden withdrawal of the main investor sounded the knell for the ambitious startup; within weeks, all employees were laid off and the office was empty."
    },
    {
        "word":  "Lethargic",
        "type":  "adjective",
        "definition":  "Sluggish, apathetic, and lacking energy.",
        "pronunciation":  "/ləˈθɑː.dʒɪk/",
        "example":  "After eating a huge Thanksgiving dinner, the whole family became lethargic, sprawled across the couches, barely able to lift a finger to change the TV channel."
    },
    {
        "word":  "Munificent",
        "type":  "adjective",
        "definition":  "Extremely generous, more than usual or expected.",
        "pronunciation":  "/mjuːˈnɪf.ɪ.sənt/",
        "example":  "The billionaire made a munificent donation of $50 million to the small library, enough to build a new wing and double its collection."
    },
    {
        "word":  "Nefarious",
        "type":  "adjective",
        "definition":  "Wicked, villainous, or criminal.",
        "pronunciation":  "/nɪˈfeə.ri.əs/",
        "example":  "The nefarious plan involved hacking into the hospital\u0027s computers and demanding a ransom in Bitcoin before restoring access to life‑support systems."
    },
    {
        "word":  "Obsequious",
        "type":  "adjective",
        "definition":  "Excessively obedient, flattering, or eager to please.",
        "pronunciation":  "/əbˈsiː.kwi.əs/",
        "example":  "The obsequious assistant laughed at every joke the boss made, agreed with every opinion, and even offered to pick up his dry cleaning without being asked."
    },
    {
        "word":  "Pragmatic",
        "type":  "adjective",
        "definition":  "Dealing with things sensibly and realistically, based on practical rather than theoretical considerations.",
        "pronunciation":  "/præɡˈmæt.ɪk/",
        "example":  "Instead of dreaming about a perfect solution, she took a pragmatic approach: fixing the most urgent bugs first, even if the code remained ugly."
    },
    {
        "word":  "Quandary",
        "type":  "noun",
        "definition":  "A state of uncertainty or perplexity, especially when a choice is difficult.",
        "pronunciation":  "/ˈkwɒn.dri/",
        "example":  "He found himself in a quandary: accept the promotion that required moving across the country, or stay in his current role with better work‑life balance."
    },
    {
        "word":  "Rancorous",
        "type":  "adjective",
        "definition":  "Characterized by bitter, long‑lasting resentment.",
        "pronunciation":  "/ˈræŋ.kər.əs/",
        "example":  "The divorce became so rancorous that the couple communicated only through lawyers, and even then, every email ended with a threat to sue for something new."
    },
    {
        "word":  "Sagacious",
        "type":  "adjective",
        "definition":  "Having or showing keen mental discernment and good judgment.",
        "pronunciation":  "/səˈɡeɪ.ʃəs/",
        "example":  "The old fisherman was sagacious; he predicted the storm two days before any weather service, simply by watching the behavior of seabirds and the color of the sky."
    },
    {
        "word":  "Taciturn",
        "type":  "adjective",
        "definition":  "Reserved or uncommunicative in speech; saying little.",
        "pronunciation":  "/ˈtæs.ɪ.tɜːn/",
        "example":  "The taciturn mechanic rarely spoke more than three words at a time, but his repairs were always perfect, so customers learned to accept his silence."
    },
    {
        "word":  "Unfathomable",
        "type":  "adjective",
        "definition":  "Incapable of being fully understood or explored.",
        "pronunciation":  "/ʌnˈfæð.ə.mə.bəl/",
        "example":  "The depths of the ocean remain unfathomable to us; we have mapped more of the Moon\u0027s surface than the seafloor, where creatures live in total darkness."
    },
    {
        "word":  "Vacillate",
        "type":  "verb",
        "definition":  "To alternate between different opinions or actions; to be indecisive.",
        "pronunciation":  "/ˈvæs.ɪ.leɪt/",
        "example":  "She vacillated for weeks between the red dress and the blue one, trying each on five times, until the store closed and she bought neither."
    },
    {
        "word":  "Wary",
        "type":  "adjective",
        "definition":  "Feeling or showing caution about possible dangers or problems.",
        "pronunciation":  "/ˈweə.ri/",
        "example":  "The hikers were wary of crossing the rickety bridge, testing each plank with their feet before committing their full weight."
    },
    {
        "word":  "Xenophobia",
        "type":  "noun",
        "definition":  "Dislike of or prejudice against people from other countries.",
        "pronunciation":  "/ˌzen.əˈfəʊ.bi.ə/",
        "example":  "The rise of xenophobia in the region led to hate crimes against immigrant families, even those who had lived there for generations."
    },
    {
        "word":  "Yoke",
        "type":  "verb",
        "definition":  "To join or link two things together, often in a burdensome way.",
        "pronunciation":  "/jəʊk/",
        "example":  "The new contract yoked the small company\u0027s success to the larger corporation\u0027s performance, so if the parent company failed, the subsidiary would collapse too."
    },
    {
        "word":  "Zenith",
        "type":  "noun",
        "definition":  "The highest point or peak of something.",
        "pronunciation":  "/ˈzen.ɪθ/",
        "example":  "At the zenith of the Roman Empire, its roads stretched over 50,000 miles and its laws influenced every corner of the known world."
    },
    {
        "word":  "Abate",
        "type":  "verb",
        "definition":  "To become less intense or widespread.",
        "pronunciation":  "/əˈbeɪt/",
        "example":  "The storm finally abated after three days, leaving behind flooded streets and uprooted trees, but also a strange, peaceful silence."
    },
    {
        "word":  "Belligerent",
        "type":  "adjective",
        "definition":  "Hostile and aggressive.",
        "pronunciation":  "/bəˈlɪdʒ.ər.ənt/",
        "example":  "The drunk man became belligerent, shoving other patrons and shouting insults until the bouncer escorted him out."
    },
    {
        "word":  "Capitulate",
        "type":  "verb",
        "definition":  "To surrender or give up under agreed conditions.",
        "pronunciation":  "/kəˈpɪtʃ.ʊ.leɪt/",
        "example":  "After a three‑month siege, the city finally capitulated, opening its gates in exchange for a promise that civilians would not be harmed."
    },
    {
        "word":  "Deleterious",
        "type":  "adjective",
        "definition":  "Causing harm or damage.",
        "pronunciation":  "/ˌdel.ɪˈtɪə.ri.əs/",
        "example":  "The deleterious effects of smoking are well documented, including lung cancer, heart disease, and a reduced life expectancy of ten years on average."
    },
    {
        "word":  "Exacerbate",
        "type":  "verb",
        "definition":  "To make a problem, bad situation, or negative feeling worse.",
        "pronunciation":  "/ɪɡˈzæs.ə.beɪt/",
        "example":  "The government\u0027s decision to cut funding for mental health services exacerbated the homelessness crisis, as many patients were released without support."
    },
    {
        "word":  "Fastidious",
        "type":  "adjective",
        "definition":  "Very attentive to detail; hard to please; meticulous.",
        "pronunciation":  "/fæsˈtɪd.i.əs/",
        "example":  "The fastidious editor rejected the manuscript because of a single comma in the wrong place, even though the story was otherwise brilliant."
    },
    {
        "word":  "Gregarious",
        "type":  "adjective",
        "definition":  "Fond of company; sociable; outgoing.",
        "pronunciation":  "/ɡrɪˈɡeə.ri.əs/",
        "example":  "The gregarious host made sure every guest felt welcome, refilling drinks, introducing strangers, and laughing loudly at every joke."
    },
    {
        "word":  "Hedonistic",
        "type":  "adjective",
        "definition":  "Engaged in the pursuit of pleasure, especially sensory pleasure.",
        "pronunciation":  "/ˌhiː.dəˈnɪs.tɪk/",
        "example":  "The hedonistic festival offered unlimited food, massages, live music, and a champagne fountain, all designed to satisfy every possible desire."
    },
    {
        "word":  "Immutable",
        "type":  "adjective",
        "definition":  "Unchanging over time; unable to be changed.",
        "pronunciation":  "/ɪˈmjuː.tə.bəl/",
        "example":  "The laws of physics were once thought immutable, but Einstein showed that time itself is relative and can stretch or shrink."
    },
    {
        "word":  "Juxtapose",
        "type":  "verb",
        "definition":  "To place different things side by side for contrast.",
        "pronunciation":  "/ˌdʒʌk.stəˈpəʊz/",
        "example":  "The exhibit juxtaposed Renaissance paintings with modern photographs, highlighting how both eras depicted human suffering in surprisingly similar ways."
    },
    {
        "word":  "Kowtow",
        "type":  "verb",
        "definition":  "To act in an excessively subservient manner.",
        "pronunciation":  "/ˌkaʊˈtaʊ/",
        "example":  "The junior executive kowtowed to every whim of his boss, even fetching coffee and agreeing with obviously wrong ideas, hoping for a promotion."
    },
    {
        "word":  "Loquacious",
        "type":  "adjective",
        "definition":  "Tending to talk a great deal; talkative.",
        "pronunciation":  "/ləˈkweɪ.ʃəs/",
        "example":  "The loquacious taxi driver told his entire life story — two marriages, three jobs, a pet iguana — during the fifteen‑minute ride to the airport."
    },
    {
        "word":  "Malleable",
        "type":  "adjective",
        "definition":  "Easily influenced, shaped, or adapted.",
        "pronunciation":  "/ˈmæl.i.ə.bəl/",
        "example":  "Children\u0027s brains are highly malleable, which is why early education can have such a profound and lasting impact on their future abilities."
    },
    {
        "word":  "Nuance",
        "type":  "noun",
        "definition":  "A subtle difference in meaning, expression, or sound.",
        "pronunciation":  "/ˈnjuː.ɑːns/",
        "example":  "The actor\u0027s performance captured every nuance of the character — a slight hesitation before a lie, a tiny smile of genuine joy — that the script had only hinted at."
    },
    {
        "word":  "Ostentatious",
        "type":  "adjective",
        "definition":  "Characterized by vulgar or pretentious display; designed to impress.",
        "pronunciation":  "/ˌɒs.tenˈteɪ.ʃəs/",
        "example":  "The rapper\u0027s ostentatious mansion featured a solid gold toilet, a swimming pool shaped like a champagne bottle, and a closet larger than most apartments."
    },
    {
        "word":  "Prolific",
        "type":  "adjective",
        "definition":  "Producing many works, results, or offspring.",
        "pronunciation":  "/prəˈlɪf.ɪk/",
        "example":  "The prolific author published three novels, two short story collections, and a memoir in just five years, writing every morning from 5 AM to noon without fail."
    },
    {
        "word":  "Quell",
        "type":  "verb",
        "definition":  "To put an end to something, typically by force or decisive action.",
        "pronunciation":  "/kwel/",
        "example":  "The principal quickly quelled the rumor by calling an assembly and showing the security footage that proved the alleged incident never happened."
    },
    {
        "word":  "Rhetoric",
        "type":  "noun",
        "definition":  "The art of effective or persuasive speaking or writing.",
        "pronunciation":  "/ˈret.ə.rɪk/",
        "example":  "The politician\u0027s rhetoric was so powerful that she convinced lifelong opponents to vote for her bill, using emotional stories and logical arguments in equal measure."
    },
    {
        "word":  "Succinct",
        "type":  "adjective",
        "definition":  "Briefly and clearly expressed.",
        "pronunciation":  "/səkˈsɪŋkt/",
        "example":  "The CEO\u0027s succinct email — just two sentences — explained the entire restructuring plan better than the 50‑page document that preceded it."
    },
    {
        "word":  "Trivial",
        "type":  "adjective",
        "definition":  "Of little value or importance; commonplace.",
        "pronunciation":  "/ˈtrɪv.i.əl/",
        "example":  "The argument over which movie to watch seemed trivial compared to the real problem: the couple had grown apart and no longer enjoyed spending time together."
    },
    {
        "word":  "Ubiquity",
        "type":  "noun",
        "definition":  "The fact of being everywhere at the same time.",
        "pronunciation":  "/juːˈbɪk.wə.ti/",
        "example":  "The ubiquity of fast‑food chains has made it difficult for small, independent restaurants to survive, even in neighborhoods with rich culinary traditions."
    },
    {
        "word":  "Venerate",
        "type":  "verb",
        "definition":  "To regard with great respect and reverence.",
        "pronunciation":  "/ˈven.ər.eɪt/",
        "example":  "In many cultures, people venerate their ancestors by maintaining altars at home and offering food and incense on special days."
    },
    {
        "word":  "Whimsical",
        "type":  "adjective",
        "definition":  "Playfully quaint or fanciful, especially in an appealing way.",
        "pronunciation":  "/ˈwɪm.zɪ.kəl/",
        "example":  "The whimsical garden featured teacups used as planters, a tiny door at the base of a tree, and wind chimes made from old silverware."
    },
    {
        "word":  "Xenial",
        "type":  "adjective",
        "definition":  "Friendly or hospitable to guests or strangers.",
        "pronunciation":  "/ˈziː.ni.əl/",
        "example":  "The xenial couple welcomed the lost hikers into their home, offering hot soup, dry clothes, and a warm bed without asking for anything in return."
    },
    {
        "word":  "Yearn",
        "type":  "verb",
        "definition":  "To have an intense feeling of longing for something, often something lost or unattainable.",
        "pronunciation":  "/jɜːn/",
        "example":  "After moving to the city, she yearned for the sound of birds at dawn and the smell of rain on dry earth — simple things her new apartment could never provide."
    },
    {
        "word":  "Zealot",
        "type":  "noun",
        "definition":  "A person who is fanatical and uncompromising in pursuit of their ideals.",
        "pronunciation":  "/ˈzel.ət/",
        "example":  "The security zealot insisted on using three different password managers, changing all passwords every week, and encrypting even grocery lists, exhausting everyone on the team."
    },
    {
        "word":  "Aplomb",
        "type":  "noun",
        "definition":  "Self-confidence or assurance, especially in a demanding situation.",
        "pronunciation":  "/əˈplɒm/",
        "example":  "Despite the technical glitch mid‑presentation, the speaker handled it with remarkable aplomb."
    },
    {
        "word":  "Chicanery",
        "type":  "noun",
        "definition":  "The use of trickery or deception to achieve a purpose.",
        "pronunciation":  "/ʃɪˈkeɪ.nər.i/",
        "example":  "The election was marred by chicanery — ballot boxes mysteriously disappeared and vote counts were altered in the dead of night."
    },
    {
        "word":  "Disparate",
        "type":  "adjective",
        "definition":  "Essentially different in kind; not allowing comparison.",
        "pronunciation":  "/ˈdɪs.pər.ət/",
        "example":  "The committee had to reconcile disparate opinions from environmentalists, developers, and local residents, each with completely different priorities."
    },
    {
        "word":  "Ephemeral",
        "type":  "adjective",
        "definition":  "Lasting for a very short time.",
        "pronunciation":  "/ɪˈfem.ər.əl/",
        "example":  "Social media trends are ephemeral; a dance craze that explodes on Tuesday is often forgotten by Friday."
    },
    {
        "word":  "Furtive",
        "type":  "adjective",
        "definition":  "Done in a secretive or guilty way, trying to avoid notice.",
        "pronunciation":  "/ˈfɜː.tɪv/",
        "example":  "He cast a furtive glance at the answer key while the teacher was writing on the board, then quickly looked away."
    },
    {
        "word":  "Gauche",
        "type":  "adjective",
        "definition":  "Lacking social grace or tact; awkward.",
        "pronunciation":  "/ɡəʊʃ/",
        "example":  "It was gauche to ask about her salary at the dinner party, and the silence that followed made everyone uncomfortable."
    },
    {
        "word":  "Hubris",
        "type":  "noun",
        "definition":  "Excessive pride or self-confidence, often leading to downfall.",
        "pronunciation":  "/ˈhjuː.brɪs/",
        "example":  "The CEO’s hubris led him to ignore every warning about the faulty product, convinced that he could never be wrong."
    },
    {
        "word":  "Insidious",
        "type":  "adjective",
        "definition":  "Proceeding in a gradual, subtle way but with harmful effects.",
        "pronunciation":  "/ɪnˈsɪd.i.əs/",
        "example":  "The insidious spread of misinformation on social media eroded trust in science long before anyone noticed the damage."
    },
    {
        "word":  "Juvenile",
        "type":  "adjective",
        "definition":  "Childish or immature; also relating to young people.",
        "pronunciation":  "/ˈdʒuː.vən.aɪl/",
        "example":  "His juvenile response — sticking out his tongue and walking away — only proved he wasn\u0027t ready for a serious debate."
    },
    {
        "word":  "Kaleidoscopic",
        "type":  "adjective",
        "definition":  "Constantly changing pattern or scene; multicolored and varied.",
        "pronunciation":  "/kəˌlaɪ.dəˈskɒp.ɪk/",
        "example":  "The city’s nightlife is kaleidoscopic, shifting from quiet jazz clubs to roaring dance halls within a single block."
    },
    {
        "word":  "Labyrinthine",
        "type":  "adjective",
        "definition":  "Complicated, confusing, and difficult to navigate.",
        "pronunciation":  "/ˌlæb.əˈrɪn.θaɪn/",
        "example":  "The tax code is so labyrinthine that even accountants hire other accountants to understand all the deductions and exemptions."
    },
    {
        "word":  "Maudlin",
        "type":  "adjective",
        "definition":  "Overly sentimental, often self-pitying or tearful.",
        "pronunciation":  "/ˈmɔːd.lɪn/",
        "example":  "The movie’s maudlin ending — with slow-motion tears and a sad violin — made the audience roll their eyes instead of cry."
    }
];

export default words;
