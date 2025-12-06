import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { TIPS_DATA } from "../components/tips/TipsData.js";
import TipCard from "../components/tips/TipCard.jsx";

const CATEGORY_STYLES = {
  equipment: "bg-emerald-50 text-emerald-700",
  safety: "bg-red-50 text-red-700",
  planning: "bg-blue-50 text-blue-700",
};

export function TipPage() {
  const { id } = useParams();
  const tip = TIPS_DATA.find((t) => t.id === id);

  if (!tip) {
    return (
      <div className="max-w-4xl mx-auto p-6 space-y-3">
        <h1 className="text-xl font-bold text-red-600">
          Porada nie została znaleziona.
        </h1>
        <Link to="/tips" className="text-blue-600 underline text-sm">
          ← Wróć do porad
        </Link>
      </div>
    );
  }

  const related = TIPS_DATA.filter(
    (t) => t.category === tip.category && t.id !== tip.id
  );

  const categoryClass =
    CATEGORY_STYLES[tip.category] || "bg-gray-100 text-gray-700";

  return (
    <div className="min-h-screen bg-bg text-text">
      <div className="max-w-4xl mx-auto p-6 pb-12 space-y-8">
        {/* Powrót */}
        <Link
          to="/tips"
          className="inline-flex items-center gap-2 text-blue-600 text-sm hover:underline"
        >
          <ArrowLeft className="w-4 h-4" />
          Wróć do porad
        </Link>

        {/* HERO OBRAZ */}
        {tip.heroImage && (
          <div className="h-64 md:h-80 w-full rounded-3xl overflow-hidden shadow-md">
            <img
              src={tip.heroImage}
              alt={tip.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        {/* KARTA TREŚCI */}
        <article className="bg-white rounded-3xl shadow-lg p-6 md:p-8 space-y-6">
          {/* Meta */}
          <div className="flex flex-wrap items-center gap-3 text-xs text-gray-500">
            <span
              className={`inline-flex items-center rounded-full px-3 py-1 text-[11px] font-semibold ${categoryClass}`}
            >
              {tip.badge}
            </span>
            {tip.readTime && (
              <span className="px-2 py-0.5 rounded-full bg-gray-100">
                ⏱ {tip.readTime}
              </span>
            )}
          </div>

          {/* Tytuł */}
          <header className="space-y-2">
            <h1 className="text-3xl font-bold text-gray-900 leading-tight">
              {tip.title}
            </h1>
            <p className="text-gray-600 text-sm md:text-base">{tip.excerpt}</p>
          </header>

          {/* WŁAŚCIWA TREŚĆ — zależna od tip.id */}
          <div className="space-y-6 text-sm md:text-base text-gray-800 leading-relaxed">
            {id === "sprzet-gory" && <TipContentEquipment />}
            {id === "bezpieczenstwo-lato" && <TipContentSafety />}
            {id === "planowanie-wyjazdu" && <TipContentPlanning />}
            {id === "pakowanie" && <TipContentPacking />}
          </div>
        </article>

        {/* Powiązane porady */}
        {related.length > 0 && (
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-gray-800">
              Powiązane porady
            </h2>
            <div className="grid md:grid-cols-2 gap-5">
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

/* ─────────────────────────────
   TREŚCI DLA POSZCZEGÓLNYCH TIPÓW
   ───────────────────────────── */

function TipContentEquipment() {
  return (
    <>
      <section className="space-y-2">
        <h2 className="text-xl font-semibold text-gray-900">
          Dlaczego odpowiedni sprzęt ma znaczenie?
        </h2>
        <p>
          W górach warunki potrafią zmieniać się w ciągu kilkunastu minut.
          Dobrze dobrany ekwipunek to nie tylko wygoda, ale przede wszystkim
          bezpieczeństwo: stabilny krok, ochrona przed wychłodzeniem i deszczem,
          pewność, że dasz radę wrócić o własnych siłach.
        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <h3 className="font-semibold text-gray-900">Obuwie</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Buty trekkingowe za kostkę z dobrą przyczepnością.</li>
            <li>
              Sztywna podeszwa (np. Vibram) – lepsza stabilność na kamieniach.
            </li>
            <li>Rozchodzone buty – unikniesz odcisków pierwszego dnia.</li>
          </ul>

          <h3 className="font-semibold text-gray-900 mt-4">Odzież</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Warstwa termiczna (koszulka z długim rękawem, polar).</li>
            <li>Warstwa przeciwdeszczowa – lekka kurtka z kapturem.</li>
            <li>Czapka, rękawiczki – nawet latem w wysokich partiach gór.</li>
          </ul>
        </div>

        <div className="space-y-2">
          <h3 className="font-semibold text-gray-900">Plecak</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Pojemność 20–30 l na jednodniowe wycieczki.</li>
            <li>Pas biodrowy odciążający ramiona.</li>
            <li>Kieszeń na bukłak lub butelkę z wodą.</li>
          </ul>

          <h3 className="font-semibold text-gray-900 mt-4">Elektronika</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Telefon z mapą offline (np. Mapy.cz, Locus, TwojSzlak 😉).</li>
            <li>Powerbank minimum 10 000 mAh.</li>
            <li>Czołówka – przydatna, gdy wracasz po zmroku.</li>
          </ul>
        </div>
      </section>

      <section className="grid md:grid-cols-[2fr,1.3fr] gap-6 items-start">
        <div className="space-y-2">
          <h3 className="font-semibold text-gray-900">
            Apteczka i bezpieczeństwo
          </h3>
          <p>
            Nawet na łatwym szlaku warto mieć przy sobie podstawową apteczkę.
            Nie musi być duża – ważne, by była przemyślana.
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>Folia NRC – zajmuje mało miejsca, a może uratować życie.</li>
            <li>Plastry, bandaż elastyczny, gaza jałowa.</li>
            <li>Środek dezynfekujący w małej butelce.</li>
            <li>Lek przeciwbólowy, który dobrze tolerujesz.</li>
          </ul>
        </div>

        <div className="bg-blue-50 rounded-2xl p-4 border border-blue-100 text-sm">
          <h3 className="font-semibold text-gray-900 mb-2">
            Najczęstsze błędy początkujących
          </h3>
          <ul className="list-disc list-inside space-y-1 text-gray-800">
            <li>Zbyt mało wody lub brak zapasu na gorszą pogodę.</li>
            <li>Nowe, nierozchodzone buty „prosto ze sklepu”.</li>
            <li>
              Przeładowany plecak – zabieranie „na wszelki wypadek” wszystkiego.
            </li>
            <li>Brak kurtki przeciwdeszczowej, bo „przecież świeci słońce”.</li>
          </ul>
        </div>
      </section>
    </>
  );
}

function TipContentSafety() {
  return (
    <>
      <section className="space-y-2">
        <h2 className="text-xl font-semibold text-gray-900">
          Letnie szlaki – piękne, ale wymagające
        </h2>
        <p>
          Wysoka temperatura, silne słońce i nagłe burze sprawiają, że latem
          łatwo popełnić błąd. Dobra wiadomość jest taka, że większości
          niebezpiecznych sytuacji można uniknąć, stosując kilka prostych zasad.
        </p>
      </section>

      <section className="space-y-3">
        <h3 className="font-semibold text-gray-900">Nawodnienie</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Pij małymi łykami regularnie, a nie „raz na kilka godzin”.</li>
          <li>Na cały dzień w upale zabierz min. 2 l płynów na osobę.</li>
          <li>
            Rozważ izotonik lub tabletkę elektrolitową przy intensywnym wysiłku.
          </li>
        </ul>
      </section>

      <section className="space-y-3">
        <h3 className="font-semibold text-gray-900">Ochrona przed słońcem</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Krem z filtrem SPF 30+ na twarz, kark, ręce.</li>
          <li>
            Czapka z daszkiem lub kapelusz – szczególnie w otwartym terenie.
          </li>
          <li>
            Okulary z filtrem UV – to nie tylko komfort, ale i zdrowie oczu.
          </li>
        </ul>
      </section>

      <section className="grid md:grid-cols-[2fr,1.3fr] gap-6 items-start">
        <div className="space-y-3">
          <h3 className="font-semibold text-gray-900">Burze i zmiana pogody</h3>
          <p>
            Latem burze pojawiają się często po południu. Planuj wyjście tak,
            aby najtrudniejsze fragmenty szlaku pokonywać rano.
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>Sprawdzaj prognozę w 2–3 źródłach (IMGW, Meteoblue itd.).</li>
            <li>Unikaj przebywania na grani, gdy w okolicy słychać grzmoty.</li>
            <li>Zejdź w dół, jeśli niebo szybko ciemnieje i rośnie wiatr.</li>
          </ul>
        </div>

        <div className="bg-red-50 rounded-2xl p-4 border border-red-100 text-sm">
          <h3 className="font-semibold text-gray-900 mb-2">
            Sygnały, że trzeba przerwać wycieczkę
          </h3>
          <ul className="list-disc list-inside space-y-1 text-gray-800">
            <li>Mocne zawroty głowy, dreszcze mimo wysokiej temperatury.</li>
            <li>Silne zmęczenie w grupie – ktoś wyraźnie „nie daje rady”.</li>
            <li>Czarniejące chmury, grzmoty, wyraźne ochłodzenie.</li>
          </ul>
        </div>
      </section>
    </>
  );
}

function TipContentPlanning() {
  return (
    <>
      <section className="space-y-2">
        <h2 className="text-xl font-semibold text-gray-900">
          5 kroków do udanej jednodniowej wycieczki
        </h2>
        <p>
          Dobrze zaplanowana trasa to mniejszy stres i więcej przyjemności w
          terenie. Poniższy schemat możesz wykorzystać zarówno w górach, jak i
          podczas weekendowych wypadów za miasto.
        </p>
      </section>

      <section className="space-y-3">
        <h3 className="font-semibold text-gray-900">1. Wybierz trasę</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>
            Dopasuj długość szlaku do kondycji najsłabszej osoby w grupie.
          </li>
          <li>
            Sprawdź sumę podejść – 15 km po płaskim to co innego niż 15 km w
            górach.
          </li>
          <li>
            Zapoznaj się z opisem atrakcji po drodze – wodospady, schroniska,
            punkty widokowe.
          </li>
        </ul>
      </section>

      <section className="space-y-3">
        <h3 className="font-semibold text-gray-900">
          2. Oszacuj czas przejścia
        </h3>
        <p>
          Czas z mapy to orientacyjny punkt wyjścia. Dodaj zapas na przerwy,
          zdjęcia, posiłki.
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li>Przyjmij dodatkowe 20–30% czasu, jeśli idziesz z dziećmi.</li>
          <li>Zaplanuj godziny tak, by wracać przed zmrokiem.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h3 className="font-semibold text-gray-900">
          3. Sprawdź pogodę i komunikację
        </h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Sprawdź prognozę dzień wcześniej i rano przed wyjściem.</li>
          <li>Ustal, skąd wracasz – ten sam parking, inna dolina, autobus?</li>
          <li>Miej zapisane rozkłady jazdy offline lub screeny w telefonie.</li>
        </ul>
      </section>

      <section className="grid md:grid-cols-[2fr,1.3fr] gap-6 items-start">
        <div className="space-y-3">
          <h3 className="font-semibold text-gray-900">4. Spakuj must-have</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Woda i przekąski energetyczne.</li>
            <li>Warstwa docieplająca i kurtka przeciwdeszczowa.</li>
            <li>Mapa offline, powerbank, mała apteczka.</li>
          </ul>

          <h3 className="font-semibold text-gray-900">
            5. Zostaw „plan w domu”
          </h3>
          <p>
            Poinformuj kogoś, dokąd idziesz i kiedy planujesz wrócić. To prosty
            nawyk, który zwiększa Twoje bezpieczeństwo.
          </p>
        </div>

        <div className="bg-blue-50 rounded-2xl p-4 border border-blue-100 text-sm">
          <h3 className="font-semibold text-gray-900 mb-2">
            Prosty check-list przed wyjściem
          </h3>
          <ul className="list-disc list-inside space-y-1 text-gray-800">
            <li>Czy naładowałeś(aś) telefon i powerbank?</li>
            <li>Czy masz kurtkę i coś cieplejszego „na górę”?</li>
            <li>Czy ktoś zna Twoją trasę i godzinę powrotu?</li>
          </ul>
        </div>
      </section>
    </>
  );
}

function TipContentPacking() {
  return (
    <>
      <section className="space-y-2">
        <h2 className="text-xl font-semibold text-gray-900">
          Pakowanie plecaka – zasady, które odciążą Twoje plecy
        </h2>
        <p>
          Sprytne ułożenie rzeczy w plecaku sprawia, że idzie się lżej, a
          najważniejsze elementy masz zawsze pod ręką. To jeden z tych trików,
          który od razu poprawia komfort na szlaku.
        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-6">
        <div className="space-y-3">
          <h3 className="font-semibold text-gray-900">
            Zasada 1: ciężar przy plecach
          </h3>
          <p>
            Najcięższe rzeczy (woda, jedzenie, elektronika) umieść jak najbliżej
            pleców, na wysokości środka ciężkości ciała.
          </p>

          <h3 className="font-semibold text-gray-900">
            Zasada 2: lekkie na dole
          </h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Śpiwór, kurtka puchowa, ubrania – to dobra „podstawa”.</li>
            <li>Wypełnij nimi puste przestrzenie, żeby rzeczy nie latały.</li>
          </ul>
        </div>

        <div className="space-y-3">
          <h3 className="font-semibold text-gray-900">
            Zasada 3: dostępne na zewnątrz
          </h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Kurtka przeciwdeszczowa – do kieszeni zewnętrznej.</li>
            <li>Butelka z wodą/bukłak – tak, by łatwo sięgać w marszu.</li>
            <li>Mapa, chusteczki, baton – w górnej kieszeni.</li>
          </ul>
        </div>
      </section>

      <section className="grid md:grid-cols-[2fr,1.3fr] gap-6 items-start">
        <div className="space-y-3">
          <h3 className="font-semibold text-gray-900">
            Organizacja w workach i pokrowcach
          </h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Ubrania do lekkiego worka – łatwiej je wyjąć naraz.</li>
            <li>Elektronikę i dokumenty trzymaj w wodoodpornym etui.</li>
            <li>Mała kosmetyczka/„łazienka” – zawsze w tym samym miejscu.</li>
          </ul>
        </div>

        <div className="bg-amber-50 rounded-2xl p-4 border border-amber-100 text-sm">
          <h3 className="font-semibold text-gray-900 mb-2">
            Błędy przy pakowaniu, które szybko poczujesz
          </h3>
          <ul className="list-disc list-inside space-y-1 text-gray-800">
            <li>Ciężkie rzeczy daleko od pleców – plecak „ciągnie w tył”.</li>
            <li>Brak porządku – za każdym razem przekopujesz cały plecak.</li>
            <li>
              Za duży plecak na krótki wypad – im większy, tym więcej upchasz.
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
