import Image from "next/image";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function AboutPage() {
  return (
    <>
      <Header />

      <div className="bg-[#FAF9F6] text-[#3E2723] py-20 px-6 md:px-20 leading-relaxed">
        <h1 className="text-5xl font-extrabold text-[#4b2e2e] mb-12 text-center">
          About Umundu Artivism
        </h1>

        {/* WHO WE ARE */}
        <section className="max-w-5xl mx-auto mb-20">
          <h2 className="text-3xl font-bold text-[#4b2e2e] mb-6">🌿 Who We Are</h2>
          <p className="text-lg mb-6">
            The Umundu Artivism is a youth-led community-based organization that uses the power
            of art, storytelling, and innovation to spark social change. Rooted in rural Embu,
            Kenya, we bring together young people to express, heal, and transform their communities
            through creative activism.
          </p>
          <p className="text-lg">
            We believe that art is more than expression—it is a catalyst for awareness, empowerment,
            and mental well-being. Through theatre, film, digital creativity, and social advocacy,
            The Umundu Artivism gives voice to the issues that matter most to young people, from
            sexual and reproductive health to environmental consciousness and gender equality.
          </p>
        </section>

        {/* ABOUT US */}
        <section className="max-w-5xl mx-auto mb-20">
          <h2 className="text-3xl font-bold text-[#4b2e2e] mb-6">✨ About Us</h2>
          <p className="text-lg mb-6">
            Founded on the belief that creativity can drive meaningful change, The Umundu Artivism
            merges art, advocacy, and innovation to address pressing social issues.
          </p>
          <p className="text-lg mb-6">
            Our programs use stage plays, short films, spoken word, and community art projects to
            raise awareness on topics such as period poverty, reproductive health, and social justice.
            Beyond art, we’ve established a Digital Hub—a safe space where youth learn marketable
            digital skills, discover their creative potential, and build sustainable livelihoods.
          </p>
          <p className="text-lg">
            Over time, we’ve witnessed how our artistic and digital initiatives have become more than
            platforms for expression—they’ve become spaces of healing, belonging, and mental wellness
            for the youth we serve.
          </p>
        </section>

        {/* WHAT WE DO */}
        <section className="max-w-5xl mx-auto mb-20">
          <h2 className="text-3xl font-bold text-[#4b2e2e] mb-6">🎭 What We Do</h2>
          <p className="text-lg mb-8">
            At The Umundu Artivism, we blend creativity with community impact through four main pillars:
          </p>

          <ol className="list-decimal pl-6 space-y-6 text-lg">
            <li>
              <strong>Art for Awareness:</strong> We create thought-provoking performances, short films,
              and visual art campaigns that shine a light on key social issues, from menstrual health
              to gender rights and environmental sustainability.
            </li>
            <li>
              <strong>Digital Empowerment Hub:</strong> Our Digital Hub equips young people with practical
              skills in graphic design, digital marketing, content creation, and photography—empowering
              them to become creators, freelancers, and changemakers in the digital economy.
            </li>
            <li>
              <strong>Community Engagement & Advocacy:</strong> We organize dialogues, art exhibitions,
              school outreach programs, and workshops that encourage open conversations and community-driven
              solutions.
            </li>
            <li>
              <strong>Women & Girl Child Empowerment Wing:</strong> This special wing focuses on uplifting
              women and girls through targeted programs addressing period poverty, menstrual hygiene management,
              and gender-based violence (GBV) recovery.
            </li>
          </ol>

          <p className="text-lg mt-8">
            We conduct menstrual health campaigns in schools and communities to ensure no girl misses
            opportunities due to her cycle. For GBV survivors, we provide psychosocial support and soft
            skills training, helping them rebuild confidence and independence through creative empowerment.
          </p>
        </section>

        {/* MISSION & VISION */}
        <section className="max-w-5xl mx-auto mb-20 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-[#4b2e2e] mb-4">🎯 Our Mission</h2>
            <p className="text-lg mb-10">
              To use art and digital innovation as tools for youth and women empowerment, mental wellness,
              and social transformation in underserved communities.
            </p>

            <h2 className="text-3xl font-bold text-[#4b2e2e] mb-4">🌈 Our Vision</h2>
            <p className="text-lg">
              A society where creativity drives equality, mental well-being, and sustainable empowerment
              for youth and women through the power of art and technology.
            </p>
          </div>
          <Image
            src="/images/mission.jpg"
            alt="Mission and Vision"
            width={600}
            height={400}
            className="rounded-3xl shadow-2xl"
          />
        </section>

        {/* IMPACT */}
        <section className="max-w-5xl mx-auto mb-20">
          <h2 className="text-3xl font-bold text-[#4b2e2e] mb-6">💫 Our Impact</h2>
          <ul className="list-disc pl-6 space-y-4 text-lg">
            <li>Empowered youth and women through creative and digital skills training.</li>
            <li>
              Produced community stage plays and short films tackling period poverty, mental health, and reproductive rights.
            </li>
            <li>Rescued and supported GBV survivors through counseling, mentorship, and skills training.</li>
            <li>Created safe spaces for youth expression, healing, and collaboration through art and digital creativity.</li>
            <li>Fostered digital literacy and employability, enabling youth to earn through creative entrepreneurship.</li>
            <li>
              Built a growing community of changemakers using art and storytelling to inspire positive behavior in their communities.
            </li>
          </ul>
        </section>

        {/* COMMUNITY ENGAGEMENT */}
        <section className="max-w-5xl mx-auto mb-20">
          <h2 className="text-3xl font-bold text-[#4b2e2e] mb-6">🤝 Community Engagement</h2>
          <p className="text-lg mb-6">
            We believe that sustainable change begins with participation. Through workshops, forums, and outreach,
            The Umundu Artivism partners with schools, youth groups, and local leaders to amplify youth and women’s
            voices and encourage collective action.
          </p>
          <p className="text-lg">
            Our approach is inclusive and participatory, ensuring every young person and woman feels seen, heard,
            and valued in shaping the future of their community.
          </p>
        </section>

        {/* ART FOR AWARENESS */}
        <section className="max-w-5xl mx-auto mb-20">
          <h2 className="text-3xl font-bold text-[#4b2e2e] mb-6">🎨 Art for Awareness & Mental Well-Being</h2>
          <p className="text-lg mb-6">
            We use art as a mirror to reflect society’s challenges and as a bridge to connect hearts and minds.
            Every mural, stage act, and film we create carries a message of hope, courage, and transformation.
          </p>
          <p className="text-lg">
            Art has also become our tool for healing. By creating safe creative spaces, we’ve seen youth overcome
            isolation, anxiety, and low self-esteem—proving that art doesn’t just change the world, it heals the soul.
          </p>
        </section>

        {/* DIGITAL HUB */}
        <section className="max-w-5xl mx-auto mb-20">
          <h2 className="text-3xl font-bold text-[#4b2e2e] mb-6">💻 The Digital Hub</h2>
          <p className="text-lg mb-6">
            Our Digital Hub is a creative innovation center where young people learn to tell their stories using
            technology. From design and video editing to social media and content creation, it nurtures 21st-century
            skills that open doors to opportunity.
          </p>
          <p className="text-lg">
            It’s more than a training space—it’s a community of creators building confidence, purpose, and digital resilience.
          </p>
        </section>

        {/* JOIN US */}
        <section className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#4b2e2e] mb-6">🌍 Join Us</h2>
          <p className="text-lg">
            Whether you’re a young creative, a woman seeking empowerment, or a partner looking to make an impact,
            you can be part of our journey to make change through creativity.
            Together, we can continue empowering minds, uplifting voices, and transforming lives through Artivism.
          </p>
        </section>
      </div>

      <Footer />
    </>
  );
}
