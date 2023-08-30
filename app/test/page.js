import dynamic from "next/dynamic";

const Questionmap = dynamic(() => import("../../components/question/QuestionMap.jsx"), {
  ssr: false,
});

export default function Home() {
      return (
        <div>
          <Questionmap />
        </div>
      );
    }