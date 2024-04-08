import { Star } from "lucide-react";
import { classNames } from "../../../utils/component.helpers";
import SectionWrapper from "../../_components/SectionWrapper";

const reviews = {
  average: 5,
  totalCount: 1624,
  counts: [
    { rating: 5, count: 1319 },
    { rating: 4, count: 222 },
    { rating: 3, count: 0 },
    { rating: 2, count: 0 },
    { rating: 1, count: 0 },
  ],
  featured: [
    {
      id: 1,
      rating: 5,
      content:
        "<p>BLOC's team was a game-changer for my business. Insightful legal advice that really made a difference.</p>",
      author: "Emily Selman",
      avatarSrc:
        "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80",
    },
    {
      id: 2,
      rating: 5,
      content:
        "<p>Quick, efficient, and friendly. BLOC exceeded my expectations at every turn. Will definitely use their services again.</p>",
      author: "Marcus Finn",
      avatarSrc:
        "https://images.unsplash.com/photo-1564564295391-7f24f26f568b?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80",
    },
    {
      id: 3,
      rating: 5,
      content:
        "<p>The team at BLOC is truly exceptional. Their dedication to finding practical solutions is unmatched.</p>",
      author: "Julia Ramos",
      avatarSrc:
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80",
    },
    {
      id: 4,
      rating: 4,
      content:
        "<p>So grateful to BLOC! They made the legal process understandable and less intimidating for me.</p>",
      author: "Derek Wells",
      avatarSrc:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80",
    },
    {
      id: 5,
      rating: 5,
      content:
        "<p>A breath of fresh air in legal services! Their approachable team made a complex issue seem simple. Highly recommend!</p>",
      author: "Samantha Lee",
      avatarSrc:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80",
    },
  ],
};

export default function Review() {
  return (
    <SectionWrapper classNames="lg:grid lg:grid-cols-12 lg:gap-x-8">
      <div className="lg:col-span-4">
        <h2 className="text-4xl font-bold tracking-tight text-gray-900">
          Customer Reviews
        </h2>

        <div className="mt-3 flex items-center">
          <div>
            <div className="flex items-center">
              {[0, 1, 2, 3, 4].map((rating) => (
                <Star
                  key={rating}
                  className={classNames(
                    reviews.average > rating
                      ? "text-yellow-400"
                      : "text-gray-300",
                    "h-5 w-5 flex-shrink-0"
                  )}
                  aria-hidden="true"
                />
              ))}
            </div>
            <p className="sr-only">{reviews.average} out of 5 stars</p>
          </div>
          <p className="ml-2 text-sm text-gray-900">
            Based on {reviews.totalCount} reviews
          </p>
        </div>

        <div className="mt-6">
          <h3 className="sr-only">Review data</h3>

          <dl className="space-y-3">
            {reviews.counts.map((count) => (
              <div key={count.rating} className="flex items-center text-sm">
                <dt className="flex flex-1 items-center">
                  <p className="w-3 font-medium text-gray-900">
                    {count.rating}
                    <span className="sr-only"> star reviews</span>
                  </p>
                  <div
                    aria-hidden="true"
                    className="ml-1 flex flex-1 items-center"
                  >
                    <Star
                      className={classNames(
                        count.count > 0 ? "text-yellow-400" : "text-gray-300",
                        "h-5 w-5 flex-shrink-0"
                      )}
                      aria-hidden="true"
                    />

                    <div className="relative ml-3 flex-1">
                      <div className="h-3 rounded-full border border-gray-200 bg-gray-100" />
                      {count.count > 0 ? (
                        <div
                          className="absolute inset-y-0 rounded-full border border-yellow-400 bg-yellow-400"
                          style={{
                            width: `calc(${count.count} / ${reviews.totalCount} * 100%)`,
                          }}
                        />
                      ) : null}
                    </div>
                  </div>
                </dt>
                <dd className="ml-3 w-10 text-right text-sm tabular-nums text-gray-900">
                  {Math.round((count.count / reviews.totalCount) * 100)}%
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="mt-10">
          <h3 className="text-lg font-medium text-gray-900">
            Share your thoughts
          </h3>
          <p className="mt-1 text-sm text-gray-600">
            If you’ve used this service, share your thoughts with other
            customers
          </p>

          <a
            href="#"
            className="mt-6 inline-flex w-full items-center justify-center rounded-md border border-gray-300 bg-white px-8 py-2 text-sm font-medium text-gray-900 hover:bg-gray-50 sm:w-auto lg:w-full"
          >
            Write a review
          </a>
        </div>
      </div>

      <div className="mt-16 lg:col-span-7 lg:col-start-6 lg:mt-0">
        <h3 className="sr-only">Recent reviews</h3>

        <div className="flow-root">
          <div className="-my-12  grid grid-cols-2 gap-x-8">
            {reviews.featured.map((review) => (
              <div key={review.id} className="py-5">
                <div className="flex items-center">
                  <img
                    src={review.avatarSrc}
                    alt={`${review.author}.`}
                    className="h-12 w-12 rounded-full"
                  />
                  <div className="ml-4">
                    <h4 className="text-sm font-bold text-gray-900">
                      {review.author}
                    </h4>
                    <div className="mt-1 flex items-center">
                      {[0, 1, 2, 3, 4].map((rating) => (
                        <Star
                          key={rating}
                          className={classNames(
                            review.rating > rating
                              ? "text-yellow-400"
                              : "text-gray-300",
                            "h-5 w-5 flex-shrink-0"
                          )}
                          aria-hidden="true"
                        />
                      ))}
                    </div>
                    <p className="sr-only">{review.rating} out of 5 stars</p>
                  </div>
                </div>

                <div
                  className="mt-4 space-y-6 text-base italic text-gray-600 truncate-3-lines"
                  dangerouslySetInnerHTML={{ __html: review.content }}
                />
              </div>
            ))}

            <div className="flex flex-col justify-center items-center bg-gray-50 h-[130px]">
              <div className="flex space-x-2">
                {[0, 1, 2, 3, 4].map((rating) => (
                  <Star
                    className={classNames(
                      " text-yellow-400 h-5 w-5 flex-shrink-0"
                    )}
                    aria-hidden="true"
                  />
                ))}
              </div>
              <button
                type="button"
                className="rounded-md bg-white mt-2 px-3.5 py-1 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
              >
                100+ reviews{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
