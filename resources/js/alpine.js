function mainData() {
    return {
        activeTab: 1,
        isOpen: false,
        open: false,
        darkMode: localStorage.getItem('darkMode') === 'true',
        dropdownOpen: false,
        posts: [],
        currentPost: null,

        async initialize() {
            this.$watch('darkMode', value => localStorage.setItem('darkMode', value));
            this.fetchPosts();
        },

        async fetchPosts() {
            try {
                const response = await fetch('./posts.json');
                const data = await response.json();
                this.posts = data.map(post => ({
                    ...post,
                    expanded: false
                }));
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        },

        toggleExpand(post) {
            if (this.currentPost && this.currentPost.id !== post.id) {
                this.currentPost.expanded = false; // Collapse the currently expanded post
            }
            post.expanded = !post.expanded;
            this.currentPost = post.expanded ? post : null;
        },

        nextPost() {
            const index = this.posts.findIndex(post => post.id === this.currentPost.id);
            this.currentPost = this.posts[(index + 1) % this.posts.length];
        },

        prevPost() {
            const index = this.posts.findIndex(post => post.id === this.currentPost.id);
            this.currentPost = this.posts[(index - 1 + this.posts.length) % this.posts.length];
        }
    }
}
// Exponer `mainData` globalmente
window.mainData = mainData;
