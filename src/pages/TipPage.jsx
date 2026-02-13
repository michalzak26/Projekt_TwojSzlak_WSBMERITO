import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  Clock,
  Tag,
  AlertTriangle,
  Info,
  HeartPulse,
  Utensils,
} from "lucide-react";
import { TIPS_DATA } from "../components/tips/TipsData.js";
import TipCard from "../components/tips/TipCard.jsx";

const CATEGORY_STYLES = {
  equipment: "bg-emerald-50 text-emerald-700 border-emerald-100",
  safety: "bg-red-50 text-red-700 border-red-100",
  planning: "bg-blue-50 text-blue-700 border-blue-100",
  health: "bg-amber-50 text-amber-700 border-amber-100",
};

const CATEGORY_NAMES = {
  equipment: "Sprzęt",
  safety: "Bezpieczeństwo",
  planning: "Planowanie",
  health: "Zdrowie",
};

export function TipPage() {
  const { id } = useParams();
  const tip = TIPS_DATA.find((t) => t.id === id);

  // 1. STAN: NIE ZNALEZIONO
  if (!tip) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center p-6 space-y-4">
        <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center">
          <AlertTriangle className="w-8 h-8 text-red-500" />
        </div>
        <h1 className="text-2xl font-bold text-gray-800">
          Porada nie została znaleziona.
        </h1>
        <Link
          to="/tips"
          className="px-6 py-2 bg-emerald-600 text-white rounded-xl shadow hover:bg-emerald-700 transition"
        >
          Wróć do listy porad
        </Link>
      </div>
    );
  }

  const related = TIPS_DATA.filter(
    (t) => t.category === tip.category && t.id !== tip.id
  ).slice(0, 2); // Pokaż max 2 powiązane

  const categoryClass =
    CATEGORY_STYLES[tip.category] ||
    "bg-gray-100 text-gray-700 border-gray-200";

  return (
    <div className="min-h-screen bg-transparent text-gray-800 font-sans selection:bg-emerald-200 selection:text-emerald-900">
      {/* TŁO DEKORACYJNE */}
      <div className="fixed inset-0 bg-gradient-to-b from-emerald-50/50 via-white to-gray-50 -z-10 pointer-events-none" />

      <div className="max-w-4xl mx-auto p-6 pb-16 space-y-8 animate-fadeIn">
        {/* PRZYCISK POWROTU */}
        <Link
          to="/tips"
          className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur rounded-xl border border-white/40 shadow-sm text-gray-600 hover:text-emerald-700 hover:bg-white transition-all group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span className="font-medium text-sm">Wróć do porad</span>
        </Link>

        {/* GŁÓWNY ARTYKUŁ */}
        <article className="bg-white/80 backdrop-blur-md rounded-[2.5rem] shadow-xl shadow-emerald-900/5 border border-emerald-100 overflow-hidden">
          {/* HERO IMAGE */}
          {tip.heroImage && (
            <div className="h-64 md:h-96 w-full relative group">
              <img
                src={tip.heroImage}
                alt={tip.title}
                className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Meta dane na zdjęciu */}
              <div className="absolute bottom-8 left-6 md:left-10 flex flex-wrap items-center gap-3">
                <span
                  className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-bold uppercase tracking-wider border backdrop-blur-md shadow-sm ${categoryClass}`}
                >
                  <Tag className="w-3 h-3" />
                  {CATEGORY_NAMES[tip.category] || tip.category}
                </span>
                {tip.readTime && (
                  <span className="inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-bold uppercase tracking-wider bg-black/40 text-white border border-white/20 backdrop-blur-md shadow-sm">
                    <Clock className="w-3 h-3" />
                    {tip.readTime}
                  </span>
                )}
              </div>
            </div>
          )}

          {/* TREŚĆ ARTYKUŁU */}
          <div className="p-6 md:p-12 md:pt-10 space-y-10">
            {/* Nagłówek */}
            <header className="space-y-6 border-b border-gray-100 pb-10">
              <h1 className="text-3xl md:text-5xl font-extrabold text-emerald-950 leading-tight tracking-tight">
                {tip.title}
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed font-medium">
                {tip.excerpt}
              </p>
            </header>

            {/* Dynamiczna treść */}
            <div className="text-gray-700 leading-relaxed space-y-10 text-lg">
              {id === "sprzet-gory" && <TipContentEquipment />}
              {id === "bezpieczenstwo-lato" && <TipContentSafety />}
              {id === "planowanie-wyjazdu" && <TipContentPlanning />}
              {id === "pakowanie" && <TipContentPacking />}

              {/* NOWE TREŚCI */}
              {id === "apteczka-turystyczna" && <TipContentFirstAid />}
              {id === "jedzenie-na-szlaku" && <TipContentFood />}
            </div>
          </div>
        </article>

        {/* POWIĄZANE PORADY */}
        {related.length > 0 && (
          <section className="space-y-6 pt-8 border-t border-gray-200/50">
            <h2 className="text-2xl font-bold text-emerald-900 flex items-center gap-2 px-2">
              <Info className="w-6 h-6 text-emerald-600" />
              Zobacz również
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {related.map((r) => (
                <TipCard key={r.id} tip={r} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}

/* KOMPONENTY POMOCNICZE (Style dla treści) */
// Stylizowany tytuł sekcji H2
const SectionTitle = ({ children }) => (
  <h2 className="text-2xl md:text-3xl font-bold text-emerald-900 mt-8 mb-6 flex items-center gap-3">
    <div className="w-2 h-8 bg-emerald-500 rounded-full shadow-sm" />
    {children}
  </h2>
);

// Stylizowany podtytuł H3
const SubTitle = ({ children }) => (
  <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">{children}</h3>
);

// Stylizowana lista
const List = ({ children }) => (
  <ul className="space-y-3 marker:text-emerald-500 list-disc list-outside pl-6 text-gray-700">
    {children}
  </ul>
);

/* TREŚCI DLA POSZCZEGÓLNYCH TIPÓW */
/* 1. SPRZĘT W GÓRY */
function TipContentEquipment() {
  return (
    <>
      <section>
        <SectionTitle>Dlaczego odpowiedni sprzęt ma znaczenie?</SectionTitle>
        <p>
          W górach warunki potrafią zmieniać się w ciągu kilkunastu minut.
          Dobrze dobrany ekwipunek to nie tylko wygoda, ale przede wszystkim
          bezpieństwo: stabilny krok, ochrona przed wychłodzeniem i deszczem,
          pewność, że dasz radę wrócić o własnych siłach.
        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-8 mt-6">
        <div>
          <SubTitle>Obuwie</SubTitle>
          <List>
            <li>Buty trekkingowe za kostkę z dobrą przyczepnością.</li>
            <li>
              Sztywna podeszwa (np. Vibram) – lepsza stabilność na kamieniach.
            </li>
            <li>Rozchodzone buty – unikniesz odcisków pierwszego dnia.</li>
          </List>

          <SubTitle>Odzież</SubTitle>
          <List>
            <li>Warstwa termiczna (koszulka z długim rękawem, polar).</li>
            <li>Warstwa przeciwdeszczowa – lekka kurtka z kapturem.</li>
            <li>Czapka, rękawiczki – nawet latem w wysokich partiach gór.</li>
          </List>
        </div>

        <div>
          <SubTitle>Plecak</SubTitle>
          <List>
            <li>Pojemność 20–30 l na jednodniowe wycieczki.</li>
            <li>Pas biodrowy odciążający ramiona.</li>
            <li>Kieszeń na bukłak lub butelkę z wodą.</li>
          </List>

          <SubTitle>Elektronika</SubTitle>
          <List>
            <li>Telefon z mapą offline (np. Mapy.cz, Locus, TwojSzlak 😉).</li>
            <li>Powerbank minimum 10 000 mAh.</li>
            <li>Czołówka – przydatna, gdy wracasz po zmroku.</li>
          </List>
        </div>
      </section>

      <div className="bg-blue-50/60 rounded-2xl p-6 border border-blue-100 text-sm shadow-sm mt-8">
        <h3 className="font-bold text-blue-900 mb-3 flex items-center gap-2 text-lg">
          <AlertTriangle className="w-5 h-5" />
          Błędy początkujących
        </h3>
        <ul className="grid sm:grid-cols-2 gap-2 text-blue-800">
          {[
            "Zbyt mało wody",
            "Nierozchodzone buty",
            "Przeładowany plecak",
            "Brak kurtki przeciwdeszczowej",
          ].map((item) => (
            <li key={item} className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-blue-400 rounded-full shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

/* 2. BEZPIECZEŃSTWO LATO */
function TipContentSafety() {
  return (
    <>
      <section>
        <SectionTitle>Letnie szlaki – piękne, ale wymagające</SectionTitle>
        <p>
          Wysoka temperatura, silne słońce i nagłe burze sprawiają, że latem
          łatwo popełnić błąd. Dobra wiadomość jest taka, że większości
          niebezpiecznych sytuacji można uniknąć, stosując kilka prostych zasad.
        </p>
      </section>

      <div className="grid md:grid-cols-2 gap-8 mt-6">
        <div className="bg-amber-50/50 p-6 rounded-2xl border border-amber-100">
          <SubTitle>☀️ Ochrona przed słońcem</SubTitle>
          <List>
            <li>Krem z filtrem SPF 30+ na twarz, kark, ręce.</li>
            <li>Czapka z daszkiem lub kapelusz.</li>
            <li>Okulary z filtrem UV – zdrowie oczu.</li>
          </List>
        </div>

        <div className="bg-blue-50/50 p-6 rounded-2xl border border-blue-100">
          <SubTitle>💧 Nawodnienie</SubTitle>
          <List>
            <li>Pij małymi łykami regularnie.</li>
            <li>Min. 2 litry płynów na osobę.</li>
            <li>Elektrolity przy dużym wysiłku.</li>
          </List>
        </div>
      </div>

      <section className="mt-8">
        <SubTitle>🌩️ Burze i zmiana pogody</SubTitle>
        <p className="mb-3">
          Latem burze pojawiają się często po południu. Planuj wyjście tak, aby
          najtrudniejsze fragmenty szlaku pokonywać rano.
        </p>
        <List>
          <li>Sprawdzaj prognozę w 2–3 źródłach (IMGW, Meteoblue itd.).</li>
          <li>Unikaj przebywania na grani, gdy w okolicy słychać grzmoty.</li>
          <li>Zejdź w dół, jeśli niebo szybko ciemnieje i rośnie wiatr.</li>
        </List>
      </section>

      <div className="bg-red-50 rounded-2xl p-6 border border-red-100 text-sm mt-8 flex items-start gap-4">
        <AlertTriangle className="w-6 h-6 text-red-500 shrink-0 mt-1" />
        <div>
          <h3 className="font-bold text-red-900 mb-2 text-lg">
            Sygnały alarmowe (przerwij wycieczkę!)
          </h3>
          <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-2 text-red-800 font-medium">
            <li>• Mocne zawroty głowy</li>
            <li>• Dreszcze mimo upału</li>
            <li>• Skrajne wyczerpanie</li>
            <li>• Nadciągająca burza</li>
          </ul>
        </div>
      </div>
    </>
  );
}

/* 3. PLANOWANIE */
function TipContentPlanning() {
  return (
    <>
      <section>
        <SectionTitle>5 kroków do udanej wycieczki</SectionTitle>
        <p>
          Dobrze zaplanowana trasa to mniejszy stres i więcej przyjemności w
          terenie. Poniższy schemat możesz wykorzystać zarówno w górach, jak i
          podczas weekendowych wypadów za miasto.
        </p>
      </section>

      <div className="space-y-6 mt-8">
        {[
          {
            title: "1. Wybierz trasę",
            content:
              "Dopasuj długość do najsłabszej osoby. Sprawdź sumę podejść i atrakcje.",
          },
          {
            title: "2. Oszacuj czas",
            content:
              "Dodaj 20-30% czasu zapasu na zdjęcia i odpoczynek. Wracaj przed zmrokiem.",
          },
          {
            title: "3. Pogoda i transport",
            content:
              "Sprawdź prognozę rano. Miej zapisane rozkłady jazdy offline.",
          },
          {
            title: "4. Ekwipunek",
            content:
              "Woda, jedzenie, mapa offline, powerbank, kurtka, apteczka.",
          },
          {
            title: "5. Zostaw plan",
            content:
              "Poinformuj bliskich gdzie idziesz i kiedy planujesz wrócić.",
          },
        ].map((step, idx) => (
          <div
            key={idx}
            className="flex gap-4 p-4 rounded-xl bg-gray-50/50 hover:bg-gray-50 border border-transparent hover:border-gray-200 transition-all"
          >
            <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-lg shrink-0 shadow-sm border border-emerald-200">
              {idx + 1}
            </div>
            <div>
              <h3 className="font-bold text-gray-900 text-lg mb-1">
                {step.title}
              </h3>
              <p className="text-gray-600">{step.content}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

/* 4. PAKOWANIE */
function TipContentPacking() {
  return (
    <>
      <section>
        <SectionTitle>Zasady pakowania plecaka</SectionTitle>
        <p>
          Sprytne ułożenie rzeczy w plecaku sprawia, że idzie się lżej, a
          najważniejsze elementy masz zawsze pod ręką.
        </p>
      </section>

      <div className="grid md:grid-cols-3 gap-6 mt-8">
        {[
          {
            title: "Ciężar przy plecach",
            desc: "Woda, jedzenie i sprzęt blisko środka ciężkości ciała.",
          },
          {
            title: "Lekkie na dnie",
            desc: "Śpiwór i ubrania na samo dno, by wypełnić luki.",
          },
          {
            title: "Pod ręką",
            desc: "Kurtka, woda, mapa i przekąski w zewnętrznych kieszeniach.",
          },
        ].map((rule, i) => (
          <div
            key={i}
            className="bg-emerald-50/50 p-6 rounded-2xl border border-emerald-100 flex flex-col"
          >
            <div className="text-emerald-300 mb-4 font-black text-6xl opacity-30 leading-none -ml-1">
              0{i + 1}
            </div>
            <h3 className="font-bold text-emerald-900 mb-2 text-lg">
              {rule.title}
            </h3>
            <p className="text-sm text-emerald-800 leading-relaxed">
              {rule.desc}
            </p>
          </div>
        ))}
      </div>

      <section className="grid md:grid-cols-[1.5fr,1fr] gap-8 items-start mt-10">
        <div>
          <SubTitle>Organizacja (Worki i pokrowce)</SubTitle>
          <List>
            <li>Ubrania do lekkiego worka – łatwiej je wyjąć naraz.</li>
            <li>Elektronikę i dokumenty trzymaj w wodoodpornym etui.</li>
            <li>Mała kosmetyczka/„łazienka” – zawsze w tym samym miejscu.</li>
          </List>
        </div>

        <div className="bg-amber-50/60 rounded-2xl p-6 border border-amber-100 text-sm">
          <h3 className="font-bold text-amber-900 mb-3 flex items-center gap-2 text-lg">
            <AlertTriangle className="w-5 h-5" />
            Unikaj tych błędów
          </h3>
          <ul className="space-y-3 text-amber-800 font-medium">
            <li className="flex gap-2">
              <span className="text-red-500 font-bold">×</span> Ciężar daleko od
              pleców
            </li>
            <li className="flex gap-2">
              <span className="text-red-500 font-bold">×</span> Brak porządku
              (chaos)
            </li>
            <li className="flex gap-2">
              <span className="text-red-500 font-bold">×</span> Za duży plecak
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

/* 5. NOWOŚĆ: APTECZKA */
function TipContentFirstAid() {
  return (
    <>
      <SectionTitle>Mała, ale ratująca życie</SectionTitle>
      <p>
        Apteczka to element wyposażenia, którego (oby!) nigdy nie będziesz
        musiał użyć. Jednak w sytuacji awaryjnej – otarcia, skaleczenia czy
        skręcenia – staje się najważniejszym przedmiotem w plecaku. Gotowe
        apteczki są ok, ale najlepiej skompletować własną.
      </p>

      <div className="grid md:grid-cols-2 gap-8 mt-8">
        <div className="bg-red-50/50 p-6 rounded-2xl border border-red-100">
          <div className="flex items-center gap-2 text-red-700 font-bold mb-4 uppercase tracking-wider text-sm">
            <HeartPulse className="w-5 h-5" /> Podstawa (Must-have)
          </div>
          <List>
            <li>Rękawiczki nitrylowe (2 pary) – bezpieczeństwo ratownika.</li>
            <li>Folia NRC (koc ratunkowy) – chroni przed wychłodzeniem.</li>
            <li>Plastry z opatrunkiem (różne rozmiary).</li>
            <li>Gaza jałowa (kompresy) i bandaż elastyczny.</li>
            <li>Środek do dezynfekcji (np. Octenisept w małym sprayu).</li>
          </List>
        </div>

        <div className="bg-blue-50/50 p-6 rounded-2xl border border-blue-100">
          <div className="flex items-center gap-2 text-blue-700 font-bold mb-4 uppercase tracking-wider text-sm">
            <Info className="w-5 h-5" /> Leki i dodatki
          </div>
          <List>
            <li>Leki przeciwbólowe (Paracetamol/Ibuprofen).</li>
            <li>Leki osobiste (jeśli przyjmujesz na stałe).</li>
            <li>Plastry na pęcherze (np. Compeed) – złoto w górach!</li>
            <li>Małe nożyczki lub scyzoryk.</li>
            <li>Gwizdek ratunkowy (często przy plecaku).</li>
          </List>
        </div>
      </div>

      <div className="mt-8 p-4 bg-gray-50 border-l-4 border-emerald-500 text-sm text-gray-600 italic">
        <strong>Wskazówka:</strong> Sprawdzaj daty ważności leków w apteczce raz
        w roku, np. przed sezonem letnim.
      </div>
    </>
  );
}

/* 6. NOWOŚĆ: JEDZENIE */
function TipContentFood() {
  return (
    <>
      <SectionTitle>Paliwo dla wędrowca</SectionTitle>
      <p>
        Podczas wędrówki spalasz znacznie więcej kalorii niż na co dzień. Głód w
        górach (tzw. "odcięcie prądu") może być niebezpieczny – powoduje
        osłabienie, drżenie mięśni i spadek koncentracji.
      </p>

      <div className="space-y-8 mt-8">
        <div>
          <SubTitle>Śniadanie – Baza na start</SubTitle>
          <p className="mb-2">Zjedz coś ciepłego i sycącego.</p>
          <List>
            <li>Owsianka z orzechami i suszonymi owocami.</li>
            <li>Jajecznica (jeśli śpisz w schronisku).</li>
            <li>Kanapki z pełnoziarnistego pieczywa.</li>
          </List>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-amber-50/50 p-6 rounded-2xl border border-amber-100">
            <div className="flex items-center gap-2 text-amber-800 font-bold mb-4 text-lg">
              <Utensils className="w-5 h-5" /> Przekąski na trasie
            </div>
            <p className="text-sm mb-4">Jedz mało, ale często (co 1-1.5h).</p>
            <List>
              <li>Batony energetyczne / proteinowe.</li>
              <li>Gorzka czekolada (szybka energia).</li>
              <li>Orzechy i bakalie (długotrwała energia).</li>
              <li>Kabanosy (sól i białko).</li>
            </List>
          </div>

          <div>
            <SubTitle>Obiad / Kolacja</SubTitle>
            <List>
              <li>Liofilizaty (lekkie, wystarczy wrzątek).</li>
              <li>Makaron z sosem (dużo węglowodanów).</li>
              <li>
                W schronisku: klasyczny żurek lub pomidorowa – rozgrzewają i
                nawadniają.
              </li>
            </List>
          </div>
        </div>
      </div>
    </>
  );
}
