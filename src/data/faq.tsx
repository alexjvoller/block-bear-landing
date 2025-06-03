import { IFAQ } from "@/types";
import React from "react";

export const faqs: IFAQ[] = [
  {
    question: `I don't track because I don't like journalling, how is this different?`,
    answer: (
      <>
        <p className="mb-4">
          Journalling, data entry and all other admin fun is categorically not
          fun. That&apos;s why we&apos;ve designed the journalling and the block
          onboarding to be as smart as possible.
        </p>
        <p className="mb-2">We do this in three main areas:</p>
        <ol className="list-decimal pl-6 space-y-2">
          <li>
            <span className="font-semibold">Data Entry by Exception:</span> Your
            target fields will be actual fields by default. Only enter
            exceptions
          </li>
          <li>
            <span className="font-semibold">We search your data first</span> As
            opppose to putting you through an onboarding modal everytime you
            start a block, we&apos;ll search your data first and only ask you if
            you haven&apos;t got a required start-marker in your history.
          </li>
          <li>
            <span className="font-semibold">Select what fields you enter:</span>
            Your journal is completely configurable for your preferences so you
            only enter the fields you want.
          </li>
        </ol>
      </>
    ),
  },
  {
    question: `This seems advanced, what if I'm a beginner?`,
    answer: (
      <p>
        From using Block Bear to simply track your daily step count or the
        number of waves caught amongst your friends, blocks can be tailored up
        or down depending on your needs.
      </p>
    ),
  },
  {
    question: `Can I simplify this all? Graphs and statistics are a vibe-kill`,
    answer: (
      <p>
        Absolutely. Graphs, statistics and your journal options have display
        preferences which carry over block to block.
      </p>
    ),
  },
  {
    question: `Okay but I use Garmin, Apple Health, can this talk to them?`,
    answer: (
      <p>
        Absolutely! Block Bear is integrated with Garmin and Apple Health so
        your data will be automatically forwarded.
      </p>
    ),
  },
  {
    question: "Can I create my own blocks?",
    answer: (
      <>
        <p className="mb-4">Yes! You have multiple options:</p>
        <ol className="list-decimal pl-6 space-y-2">
          <li>
            <span className="font-semibold">Create from Scratch:</span> Build
            your own custom blocks
          </li>
          <li>
            <span className="font-semibold">Use Templates:</span> Start with
            pre-made templates
          </li>
          <li>
            <span className="font-semibold">AI Assistance:</span> Use AI to give
            you a starting point
          </li>
        </ol>
        <p className="mt-4">
          You can also invite your friends to join your blocks, and make them
          public on the Block marketplace
        </p>
      </>
    ),
  },
  {
    question: "How do I know which training block is right for me?",
    answer: (
      <>
        <p className="mb-4">
          The Block marketplace has a standardized services catalog where you
          can filter by: sport, skill level, and many more.
        </p>
        <p className="mt-4">
          Whether you want one-on-one coaching with chat and file-review, or
          just a beginner template running plan, your next block is just a click
          away.
        </p>
      </>
    ),
  },
];
