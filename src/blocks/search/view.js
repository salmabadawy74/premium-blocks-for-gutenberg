// @jsx h
import { h } from 'dom-chef'
import classnames from 'classnames'

const getPostPreview = (post) => {
    const { _embedded, link: href, title } = post;
    return (
        <a className="pbg-search-item" key={href} {...{ href }}>
            {_embedded['wp:featuredmedia'] && (
                <div
                    {...{
                        class: classnames({
                            ['pbg-image-container']: true,
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
                    <div class="pbg-ratio" />
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
        if (searchBlock.classList.contains('pbg-style-button')) {
            const searchButton = searchBlock.querySelector('.wp-block-premium-search__button');
            const searchModal = searchBlock.querySelector('.pbg-search-modal');
            const closeButton = searchModal.querySelector('.pbg-modal-actions button');
            const searchInput = searchBlock.querySelector('input[type="search"]');
            const form = searchBlock.querySelector('.pbg-advanced-search-form');

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

            if (searchBlock.classList.contains('pbg-ajax-search')) {
                searchInput.addEventListener('input', async (e) => {
                    const value = e.target.value;
                    const posts = await getPostsByName(value);

                    const searchResultsElement = form.querySelector('.pbg-search-results');
                    if (searchResultsElement) {
                        form.removeChild(searchResultsElement)
                    }

                    if (posts.length > 0 && e.target.value.trim().length > 0) {
                        let searchResults = (
                            <div className="pbg-search-results">
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
        if (searchBlock.classList.contains('pbg-style-default') && searchBlock.classList.contains('pbg-ajax-search')) {
            const searchInput = searchBlock.querySelector('input[type="search"]');

            searchInput.addEventListener('input', async (e) => {
                const value = e.target.value;
                const posts = await getPostsByName(value);

                const searchDropdownElement = searchBlock.querySelector('.pbg-search-dropdown');
                if (searchDropdownElement) {
                    searchBlock.removeChild(searchDropdownElement)
                }

                if (posts.length > 0 && e.target.value.trim().length > 0) {
                    let searchResults = (
                        <div className="pbg-search-dropdown">
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