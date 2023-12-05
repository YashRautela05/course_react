import {
  Box,
  List,
  ListItemButton,
  ListItemText,
  ListSubheader,
} from "@mui/material";
import { useState } from "react";
import { useParams } from "react-router-dom";
import RichTextReadOnly from "../../../RichTextReadOnly";
import useExtensions from "../../../demo/useExtensions";
import {
  TopicsState,
  useFetchTopicByCourseIdQuery,
} from "../../../state/api/fetchTopicsByCourseIdSlice";
export default function Body() {
  const { courseId } = useParams();
  const {
    data: topics,
    isSuccess,
    isError,
    isLoading,
  } = useFetchTopicByCourseIdQuery(courseId ?? "");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [blogData, setBlogData] = useState("");

  return (
    <>
      <Box
        display={"flex"}
        width={"100vw"}
        height={"100%"}
        overflow={"hidden"}
        marginTop={"64px"}
      >
        <Box
          width={"15%"}
          height={"100%"}
          display={"flex"}
          sx={{ overflowY: "scroll" }}
        >
          <List
            sx={{ width: "100%" }}
            component={"nav"}
            subheader={<ListSubheader>Topics</ListSubheader>}
          >
            {isSuccess ? (
              topics.map((topic: TopicsState, index: number) => {
                return (
                  <>
                    <ListItemButton
                      disableRipple
                      selected={selectedIndex === index}
                      onClick={(event) => {
                        setSelectedIndex(index), setBlogData(topic.blog);
                      }}
                    >
                      <ListItemText primary={topic.title} />
                    </ListItemButton>
                  </>
                );
              })
            ) : (
              <></>
            )}
          </List>
        </Box>

        <Box
          width={"85%"}
          height={"100%"}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <BlogPane blogData={blogData} />
        </Box>
      </Box>
    </>
  );
}

type Props = {
  blogData: string;
};
function BlogPane(props: Props) {
  const exampleContent =
    '<h2 style="text-align: center">Hey there 👋</h2><p>This is a <em>basic</em> example of <code>mui-tiptap</code>, which combines <a target="_blank" rel="noopener noreferrer nofollow" href="https://tiptap.dev/">Tiptap</a> with customizable <a target="_blank" rel="noopener noreferrer nofollow" href="https://mui.com/">MUI (Material-UI)</a> styles, plus a suite of additional components and extensions! Sure, there are <strong>all <em>kinds</em> of <s>text</s> <u>formatting</u> options</strong> you’d probably expect from a rich text editor. But wait until you see the <span data-type="mention" data-id="15" data-label="Axl Rose">@Axl Rose</span> mentions and lists:</p><ul><li><p>That’s a bullet list with one …</p></li><li><p>… or two list items.</p></li></ul><p>Isn’t that great? And all of that is editable. <strong><span style="color: #ff9900">But wait, </span><span style="color: #403101"><mark data-color="#ffd699" style="background-color: #ffd699; color: inherit">there’s more!</mark></span></strong> Let’s try a code block:</p><pre><code class="language-css">body {\n  display: none;\n}</code></pre><p></p><p>That’s only the tip of the iceberg. Feel free to add and resize images:</p><img height="auto" src="http://placekitten.com/600/400" alt="kitten" width="350" style="aspect-ratio: 3 / 2"><p></p><p>Organize information in tables:</p><table><tbody><tr><th colspan="1" rowspan="1"><p>Name</p></th><th colspan="1" rowspan="1"><p>Role</p></th><th colspan="1" rowspan="1"><p>Team</p></th></tr><tr><td colspan="1" rowspan="1"><p>Alice</p></td><td colspan="1" rowspan="1"><p>PM</p></td><td colspan="1" rowspan="1"><p>Internal tools</p></td></tr><tr><td colspan="1" rowspan="1"><p>Bob</p></td><td colspan="1" rowspan="1"><p>Software</p></td><td colspan="1" rowspan="1"><p>Infrastructure</p></td></tr></tbody></table><p></p><p>Or write down your groceries:</p><ul data-type="taskList"><li data-checked="true" data-type="taskItem"><label><input type="checkbox" checked="checked"><span></span></label><div><p>Milk</p></div></li><li data-checked="false" data-type="taskItem"><label><input type="checkbox"><span></span></label><div><p>Eggs</p></div></li><li data-checked="false" data-type="taskItem"><label><input type="checkbox"><span></span></label><div><p>Sriracha</p></div></li></ul><blockquote><p>Wow, that’s amazing. Good work! 👏 <br>— Mom</p></blockquote><p>Give it a try and click around!</p>';
  const data = props;
  const extensions = useExtensions({
    placeholder: "Add your own content here...",
  });
  return (
    <>
      <Box
        width={"100%"}
        height={"100%"}
        padding={"2rem"}
        sx={{ overflowY: "scroll", overflowX: "hidden" }}
      >
        <RichTextReadOnly
          content={props.blogData}
          extensions={extensions}
        ></RichTextReadOnly>
      </Box>
    </>
  );
}
