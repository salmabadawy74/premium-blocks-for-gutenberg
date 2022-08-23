// @jsx h
import { h } from 'dom-chef'
import classnames from 'classnames'

const getPostPreview = (post) => {
    const { _embedded, link: href, title } = post;
    return (
        <a className="premium-search-item" key={href} {...{ href }}>
            {_embedded['wp:featuredmedia'] && (
                <div
                    {...{
                        class: classnames({
                            ['premium-image-container']: true,
                        }),
                    }}>
                    <img
                        {...{
                            src: (
                                (
                                    _embedded['wp:featuredmedia'][0]
                                        .media_details || {
                                        sizes: {},
                                    }
                                ).sizes || {}
                            ).thumbnail
                                ? (
                                    _embedded['wp:featuredmedia'][0]
                                        .media_details || {
                                        sizes: [],
                                    }
                                ).sizes.thumbnail.source_url
                                : values(
                                    (
                                        _embedded['wp:featuredmedia'][0]
                                            .media_details || {
                                            sizes: [],
                                        }
                                    ).sizes || {}
                                ).reduce(
                                    (currentSmallest, current) =>
                                        current.width <
                                            currentSmallest.width
                                            ? current
                                            : currentSmallest,
                                    {
                                        width: 9999999999,
                                    }
                                ).source_url ||
                                _embedded['wp:featuredmedia'][0].source_url,
                        }}
                    />
                    <div class="premium-ratio" />
                </div>
            )}

            <span
                dangerouslySetInnerHTML={{
                    __html: title.rendered,
                }}
                key="span"
            />
        </a>
    );
}

const getPostsByName = async (search) => {
    const data = await fetch(`${PBGSearch.rest_url}wp/v2/posts${PBGSearch.rest_url.indexOf('?') > -1 ? '&' : '?'
        }_embed=1&post_type=post&per_page=6&search=${search}`);

    const jsonData = await data.json();

    return jsonData;
}

const searchBlocks = document.querySelectorAll('.wp-block-premium-search');

if (searchBlocks.length > 0) {
    searchBlocks.forEach(function (searchBlock) {
        if (searchBlock.classList.contains('premium-style-button')) {
            const searchButton = searchBlock.querySelector('.wp-block-premium-search__button');
            const searchModal = searchBlock.querySelector('.premium-search-modal');
            const closeButton = searchModal.querySelector('.premium-modal-actions button');
            const searchInput = searchBlock.querySelector('input[type="search"]');
            const form = searchBlock.querySelector('.premium-advanced-search-form');

            searchButton.addEventListener('click', (e) => {
                e.preventDefault();
                searchModal.classList.add('open');
                searchBlock.classList.add('modal-open');
            });

            closeButton.addEventListener('click', (e) => {
                e.preventDefault();
                searchModal.classList.remove('open');
                searchBlock.classList.remove('modal-open');
            })

            if (searchBlock.classList.contains('premium-ajax-search')) {
                searchInput.addEventListener('input', async (e) => {
                    const value = e.target.value;
                    const posts = await getPostsByName(value);

                    const searchResultsElement = form.querySelector('.premium-search-results');
                    if (searchResultsElement) {
                        form.removeChild(searchResultsElement)
                    }

                    if (posts.length > 0 && e.target.value.trim().length > 0) {
                        let searchResults = (
                            <div className="premium-search-results">
                                {posts.map((post) =>
                                    getPostPreview(post)
                                )}
                            </div>
                        )

                        form.appendChild(searchResults)
                    }
                })
            }
        }
        if (searchBlock.classList.contains('premium-style-default') && searchBlock.classList.contains('premium-ajax-search')) {
            const searchInput = searchBlock.querySelector('input[type="search"]');

            searchInput.addEventListener('input', async (e) => {
                const value = e.target.value;
                const posts = await getPostsByName(value);

                const searchDropdownElement = searchBlock.querySelector('.premium-search-dropdown');
                if (searchDropdownElement) {
                    searchBlock.removeChild(searchDropdownElement)
                }

                if (posts.length > 0 && e.target.value.trim().length > 0) {
                    let searchResults = (
                        <div className="premium-search-dropdown">
                            {posts.map((post) =>
                                getPostPreview(post)
                            )}
                        </div>
                    )

                    searchBlock.appendChild(searchResults)
                }
            })
        }
    });
}

function values(obj) {
    var result = []

    if (typeof obj == 'object' || typeof obj == 'function') {
        var keys = Object.keys(obj)
        var len = keys.length

        for (var i = 0; i < len; i++) {
            result.push(obj[keys[i]])
        }

        return result
    }
}