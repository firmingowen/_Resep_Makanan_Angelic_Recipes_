import streamlit as st

if 'chat' not in st.session_state:
    st.session_state.chat = "A: Hello"

def submit():
    st.session_state.chat += f'  \nB: {st.session_state.B}'
    st.session_state.chat += '  \nA: Some response.'
    # Clear the text input widget for convenience
    st.session_state.B = ''

st.write(st.session_state.chat)

st.text_input('B\'s Response', key='B', on_change=submit)

# Define the scroll operation as a function and pass in something unique for each
# page load that it needs to re-evaluate where "bottom" is
js = f"""
<script>
    function scroll(dummy_var_to_force_repeat_execution){{
        var textAreas = parent.document.querySelectorAll('section.main');
        for (let index = 0; index < textAreas.length; index++) {{
            textAreas[index].style.color = 'red'
            textAreas[index].scrollTop = textAreas[index].scrollHeight;
        }}
    }}
    scroll({len(st.session_state.chat)})
</script>
"""

st.components.v1.html(js) 